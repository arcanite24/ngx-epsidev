/*
 * Public API Surface of @epsidev/prometheus
 */

// Core
export * from './lib/prometheus.module';
export * from './lib/prometheus-table/prometheus-table.component';

export { PrometheusFieldType, PrometheusTableConfig as PrometheusConfig, PrometheusField } from './models/prometheus.models';

// Default Adapters
export { IPrometheusAdapter } from './models/adapter.interface';
export { PrometheusAdapter } from './models/adapter.abstract';

export { DionisioAdapter } from './adapters/dionisio.adapter';
