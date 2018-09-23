import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPurchasesFromVendorsComponent } from './report-purchases-from-vendors.component';

describe('ReportPurchasesFromVendorsComponent', () => {
  let component: ReportPurchasesFromVendorsComponent;
  let fixture: ComponentFixture<ReportPurchasesFromVendorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPurchasesFromVendorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPurchasesFromVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
