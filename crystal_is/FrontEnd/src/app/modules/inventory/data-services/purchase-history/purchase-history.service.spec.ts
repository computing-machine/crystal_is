import { TestBed, inject } from '@angular/core/testing';

import { PurchaseHistoryService } from './purchase-history.service';

describe('PurchaseHistoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PurchaseHistoryService]
    });
  });

  it('should be created', inject([PurchaseHistoryService], (service: PurchaseHistoryService) => {
    expect(service).toBeTruthy();
  }));
});
