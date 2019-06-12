import { Injectable, Inject } from '@angular/core';
import { NgxDionisioConfig, NGX_DIONISIO_CONFIG, DionisioHello, DionisioCollection, DionisioDocument, DionisioChange, DionisioChangeTypes } from './models/ngx-dionisio.models';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class DionisioService {

  constructor(
    @Inject(NGX_DIONISIO_CONFIG) private config: NgxDionisioConfig,
    private http: HttpClient,
    private socket: Socket
  ) { }

  public get base_url(): string {
    if (!this.config.base_url) { return ''; }
    return this.config.base_url;
  }

  public isDionisio(): Promise<DionisioHello> {
    return this.http.get<DionisioHello>(`${this.base_url}/hello`).toPromise();
  }

  public collection<T = any>(path: string): DionisioCollection<T[]> {
    return {
      path,
      get: () => this.http.get<T[]>(`${this.base_url}/${path}`).toPromise(),
      add: payload => this.http.post<Partial<T>>(`${this.base_url}/${path}`, payload).toPromise(),
      query: payload => this.http.post<T[]>(`${this.base_url}/${path}/query`, payload).toPromise(),
      valueChanges: () => this.valueChanges<T>(path),
    };
  }

  public doc<T = any>(path: string, id: string | number): DionisioDocument<T> {
    return {
      path: `${path}/${id}`,
      get: () => this.http.get<T>(`${this.base_url}/${path}/${id}`).toPromise(),
      delete: () => this.http.delete<T>(`${this.base_url}/${path}/${id}`).toPromise(),
      update: payload => this.http.patch<Partial<T>>(`${this.base_url}/${path}/${id}`, payload).toPromise(),
    };
  }

  valueChanges<T>(path: string) {
    return new Observable<T[]>(subscriber => {

      let collection: T[] = [];
      const event = path.split('/')[0];

      // Get first snapshot
      this.http.get<T[]>(`${this.base_url}/${path}`).toPromise().then(snap => {

        // Set in collection temp var
        collection = snap;

        // Emit the first snapshot
        subscriber.next(collection);

        // Subscribe to WebSocket
        this.socket.fromEvent(event).subscribe((change: DionisioChange) => {

          // console.log(change);
          // TODO: Unsubscribe from Socket

          // Handle collection changes
          if (change.type === DionisioChangeTypes.Create) {
            collection.push(change.payload);
            subscriber.next(collection);
          }

          if (change.type === DionisioChangeTypes.Delete) {
            collection = collection.filter(doc => doc['id'].toString() !== change.payload.id.toString());
            subscriber.next(collection);
          }

          if (change.type === DionisioChangeTypes.Update) {
            collection = collection.map(doc => doc['id'].toString() === change.payload.id.toString() ?
            Object.assign(doc, change.payload.body) as T : doc);
            subscriber.next(collection);
          }

        });

      });

    });
  }

}
