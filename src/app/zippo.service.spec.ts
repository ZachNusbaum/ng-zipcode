import { TestBed } from '@angular/core/testing';

import { ZippoService } from './zippo.service';

describe('ZippoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZippoService = TestBed.get(ZippoService);
    expect(service).toBeTruthy();
  });
});
