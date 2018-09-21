import { TestBed } from '@angular/core/testing';

import { CalculaIdadeService } from './calcula-idade.service';

describe('CalculaIdadeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculaIdadeService = TestBed.get(CalculaIdadeService);
    expect(service).toBeTruthy();
  });
});
