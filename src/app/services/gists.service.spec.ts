import { TestBed, inject } from '@angular/core/testing';

import { GistsService } from './gists.service';

describe('GistsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GistsService]
    });
  });

  it('should be created', inject([GistsService], (service: GistsService) => {
    expect(service).toBeTruthy();
  }));
});
