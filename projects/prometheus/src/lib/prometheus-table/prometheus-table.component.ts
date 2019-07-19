import { Component, OnInit, Input } from '@angular/core';
import { PrometheusTableConfig } from '../../models/prometheus.models';
import { PrometheusService } from '../prometheus.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'prometheus-table',
  templateUrl: './prometheus-table.component.html',
  styleUrls: ['./prometheus-table.component.css']
})
export class PrometheusTableComponent implements OnInit {

  @Input() public config: PrometheusTableConfig;

  public dataSource$: Observable<any[]>;

  constructor(
    private prometheus: PrometheusService,
  ) { }

  ngOnInit() {
    this.loadDataSource();
  }

  loadDataSource() {
    if (this.config.dataSource) {
      this.dataSource$ = this.config.dataSource;
    } else {
      this.dataSource$ = this.prometheus.adapter.getDataSource(this.config.collection);
    }
  }

}
