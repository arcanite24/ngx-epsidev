import { TestBed } from '@angular/core/testing';

import { NgxFacturamaService } from './ngx-facturama.service';

describe('NgxFacturamaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxFacturamaService = TestBed.get(NgxFacturamaService);
    expect(service).toBeTruthy();
  });
});
