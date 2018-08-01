import { TestBed, inject } from '@angular/core/testing';

import { IntermediaryService } from './intermediary.service';

describe('IntermediaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntermediaryService]
    });
  });

  it('should be created', inject([IntermediaryService], (service: IntermediaryService) => {
    expect(service).toBeTruthy();
  }));
});
