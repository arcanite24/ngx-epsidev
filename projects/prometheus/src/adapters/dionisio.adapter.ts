import { PrometheusAdapter } from '../models/adapter.abstract';
import { AdapterConfig } from '../models/adapter.config';

export class DionisioAdapter extends PrometheusAdapter {

  constructor(
    public config: AdapterConfig,
  ) {
    super(config);
  }

  hello() {
    return 'Hola :o';
  }

  getDataSource() {
    return null;
  }

}
