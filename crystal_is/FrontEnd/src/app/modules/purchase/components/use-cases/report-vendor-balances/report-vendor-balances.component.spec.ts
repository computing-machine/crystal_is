import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportVendorBalancesComponent } from './report-vendor-balances.component';

describe('ReportVendorBalancesComponent', () => {
  let component: ReportVendorBalancesComponent;
  let fixture: ComponentFixture<ReportVendorBalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportVendorBalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportVendorBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
