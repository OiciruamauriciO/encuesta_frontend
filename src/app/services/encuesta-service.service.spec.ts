import { TestBed } from '@angular/core/testing';

import { EncuestaServiceService } from './encuesta-service.service';

describe('EncuestaServiceService', () => {
  let service: EncuestaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncuestaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
