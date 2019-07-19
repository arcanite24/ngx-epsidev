import { PrometheusAdapter } from 'prometheus';
import { AdapterConfig } from 'prometheus/models/adapter.config';

export class NestAdapter extends PrometheusAdapter {

  constructor(
    public config: AdapterConfig,
  ) {
    super(config);
  }

  hello() {
    return 'holaa desde NestAdapter';
  }

  getDataSource() {
    return null;
  }

}
