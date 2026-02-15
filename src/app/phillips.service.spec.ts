import { TestBed } from '@angular/core/testing';

import { PhillipsService } from './phillips.service';

describe('PhillipsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhillipsService = TestBed.get(PhillipsService);
    expect(service).toBeTruthy();
  });
});
