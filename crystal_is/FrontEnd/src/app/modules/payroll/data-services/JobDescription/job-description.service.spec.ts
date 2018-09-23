import { TestBed, inject } from '@angular/core/testing';

import { JobDescriptionService } from './job-description.service';

describe('JobDescriptionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JobDescriptionService]
    });
  });

  it('should be created', inject([JobDescriptionService], (service: JobDescriptionService) => {
    expect(service).toBeTruthy();
  }));
});
