import { InjectionToken } from '@angular/core';
import { PrometheusAdapter } from './adapter.abstract';
import { Observable } from 'rxjs';

export const PROMETHEUS_CONFIG = new InjectionToken<PrometheusTableConfig>('PROMETHEUS_CONFIG');

export interface PrometheusConfig {
  adapter: PrometheusAdapter;
}

export enum PrometheusFieldType {
  Text = 'text',
}

export interface PrometheusTableConfig<T = any> {
  collection: string;
  headers: PrometheusField<T>[];
  dataSource?: Observable<T[]>;
}

export interface PrometheusField<T = any> {
  name: string;
  type: PrometheusFieldType;
  label?: string;
  customRender?: (row: T, index: number) => string;
  customHTML?: (row: T, index: number) => string;
}
