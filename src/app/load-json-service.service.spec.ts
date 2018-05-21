import { TestBed, inject } from '@angular/core/testing';

import { LoadJsonServiceService } from './load-json-service.service';

describe('LoadJsonServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadJsonServiceService]
    });
  });

  it('should be created', inject([LoadJsonServiceService], (service: LoadJsonServiceService) => {
    expect(service).toBeTruthy();
  }));
});
