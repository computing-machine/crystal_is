import { TestBed, inject } from '@angular/core/testing';

import { FinishedGoodService } from './finished-good.service';

describe('FinishedGoodService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FinishedGoodService]
    });
  });

  it('should be created', inject([FinishedGoodService], (service: FinishedGoodService) => {
    expect(service).toBeTruthy();
  }));
});
