import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayrollSidebarComponent } from './payroll-sidebar.component';

describe('PayrollSidebarComponent', () => {
  let component: PayrollSidebarComponent;
  let fixture: ComponentFixture<PayrollSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayrollSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayrollSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
