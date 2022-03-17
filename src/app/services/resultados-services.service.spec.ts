import { TestBed } from '@angular/core/testing';

import { ResultadosServicesService } from './resultados-services.service';

describe('ResultadosServicesService', () => {
  let service: ResultadosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultadosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
