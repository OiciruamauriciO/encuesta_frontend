import { TestBed } from '@angular/core/testing';

import { CargaScriptMenuService } from './carga-script-menu.service';

describe('CargaScriptMenuService', () => {
  let service: CargaScriptMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CargaScriptMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
