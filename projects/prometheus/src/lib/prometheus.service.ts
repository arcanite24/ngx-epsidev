import { Injectable, Inject } from '@angular/core';
import { PROMETHEUS_CONFIG, PrometheusConfig } from '../models/prometheus.models';
import { PrometheusAdapter } from '../models/adapter.abstract';

@Injectable({
  providedIn: 'root'
})
export class PrometheusService {

  constructor(
    @Inject(PROMETHEUS_CONFIG) private config: PrometheusConfig,
  ) {
    console.log(config);
  }

  get adapter(): PrometheusAdapter { return this.config.adapter; }

}
