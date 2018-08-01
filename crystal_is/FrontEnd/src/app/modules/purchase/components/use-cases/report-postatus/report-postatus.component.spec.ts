import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportPOstatusComponent } from './report-postatus.component';

describe('ReportPOstatusComponent', () => {
  let component: ReportPOstatusComponent;
  let fixture: ComponentFixture<ReportPOstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportPOstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportPOstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
