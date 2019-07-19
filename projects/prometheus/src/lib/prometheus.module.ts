import { NgModule, ModuleWithProviders } from '@angular/core';
import { PrometheusConfig, PROMETHEUS_CONFIG } from '../models/prometheus.models';
import { PrometheusTableComponent } from './prometheus-table/prometheus-table.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PrometheusTableComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PrometheusTableComponent
  ]
})
export class PrometheusModule {

  static forRoot(config: PrometheusConfig): ModuleWithProviders {
    return {
      ngModule: PrometheusModule,
      providers: [
        {
          provide: PROMETHEUS_CONFIG,
          useValue: config
        }
      ]
    };
  }

}
