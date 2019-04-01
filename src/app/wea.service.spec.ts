import { TestBed } from '@angular/core/testing';

import { WeaService } from './wea.service';

describe('WeaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeaService = TestBed.get(WeaService);
    expect(service).toBeTruthy();
  });
});
