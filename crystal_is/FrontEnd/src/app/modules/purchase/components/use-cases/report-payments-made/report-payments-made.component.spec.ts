import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPaymentsMadeComponent } from './report-payments-made.component';

describe('ReportPaymentsMadeComponent', () => {
  let component: ReportPaymentsMadeComponent;
  let fixture: ComponentFixture<ReportPaymentsMadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPaymentsMadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPaymentsMadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
