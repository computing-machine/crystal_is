import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEstimateComponent } from './update-estimate.component';

describe('UpdateEstimateComponent', () => {
  let component: UpdateEstimateComponent;
  let fixture: ComponentFixture<UpdateEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
