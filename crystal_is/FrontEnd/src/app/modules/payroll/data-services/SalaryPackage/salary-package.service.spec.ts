import { TestBed, inject } from '@angular/core/testing';

import { SalaryPackageService } from './salary-package.service';

describe('SalaryPackageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SalaryPackageService]
    });
  });

  it('should be created', inject([SalaryPackageService], (service: SalaryPackageService) => {
    expect(service).toBeTruthy();
  }));
});
