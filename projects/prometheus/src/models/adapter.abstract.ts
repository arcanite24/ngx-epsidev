import { IPrometheusAdapter } from './adapter.interface';
import { AdapterConfig } from './adapter.config';
import { Observable } from 'rxjs';

export abstract class PrometheusAdapter implements IPrometheusAdapter {

  constructor(
    public config: AdapterConfig,
  ) {}

  abstract hello(): string;

  abstract getDataSource(collection: string): Observable<any>;

}
