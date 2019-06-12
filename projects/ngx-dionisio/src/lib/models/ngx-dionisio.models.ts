import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const NGX_DIONISIO_CONFIG = new InjectionToken<NgxDionisioConfig>('NGX_DIONISIO_CONFIG');

export interface NgxDionisioConfig {

  // Backend config
  base_url: string;

}

export interface DionisioHello {
  version: string;
  message: string;
}

export interface DionisioCollection<T = any> {
  path: string;
  get: () => Promise<T>;
  add: (payload: any) => Promise<any>;
  query: (payload: any) => Promise<T>;
  valueChanges: () => Observable<T>;
}

export interface DionisioDocument<T = any> {
  path: string;
  get: () => Promise<T>;
  delete: () => Promise<any>;
  update: (payload: any) => Promise<any>;
}

export interface DionisioChange {
  collection: string;
  type: DionisioChangeTypes;
  payload: any;
}

export enum DionisioChangeTypes {
  Create = 'CREATE',
  Delete = 'DELETE',
  Update = 'UPDATE',
}
