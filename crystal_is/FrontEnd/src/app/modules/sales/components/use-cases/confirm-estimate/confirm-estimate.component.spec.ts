import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmEstimateComponent } from './confirm-estimate.component';

describe('ConfirmEstimateComponent', () => {
  let component: ConfirmEstimateComponent;
  let fixture: ComponentFixture<ConfirmEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
