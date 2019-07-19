import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrometheusTableComponent } from './prometheus-table.component';

describe('PrometheusTableComponent', () => {
  let component: PrometheusTableComponent;
  let fixture: ComponentFixture<PrometheusTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrometheusTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrometheusTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
