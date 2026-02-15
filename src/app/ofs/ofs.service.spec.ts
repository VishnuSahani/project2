import { TestBed } from '@angular/core/testing';

import { OfsService } from './ofs.service';

describe('OfsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OfsService = TestBed.get(OfsService);
    expect(service).toBeTruthy();
  });
});
