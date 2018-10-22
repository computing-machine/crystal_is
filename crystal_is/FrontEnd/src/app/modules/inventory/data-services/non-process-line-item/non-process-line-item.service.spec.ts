import { TestBed, inject } from '@angular/core/testing';

import { NonProcessLineItemService } from './non-process-line-item.service';

describe('NonProcessLineItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NonProcessLineItemService]
    });
  });

  it('should be created', inject([NonProcessLineItemService], (service: NonProcessLineItemService) => {
    expect(service).toBeTruthy();
  }));
});
