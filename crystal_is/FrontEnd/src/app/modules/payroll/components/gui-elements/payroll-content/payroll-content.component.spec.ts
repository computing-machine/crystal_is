import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollContentComponent } from './payroll-content.component';

describe('PayrollContentComponent', () => {
  let component: PayrollContentComponent;
  let fixture: ComponentFixture<PayrollContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
