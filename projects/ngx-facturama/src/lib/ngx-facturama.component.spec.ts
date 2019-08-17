import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFacturamaComponent } from './ngx-facturama.component';

describe('NgxFacturamaComponent', () => {
  let component: NgxFacturamaComponent;
  let fixture: ComponentFixture<NgxFacturamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFacturamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFacturamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
