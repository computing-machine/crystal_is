import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateIntermediaryComponent } from './deactivate-intermediary.component';

describe('DeactivateIntermediaryComponent', () => {
  let component: DeactivateIntermediaryComponent;
  let fixture: ComponentFixture<DeactivateIntermediaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivateIntermediaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateIntermediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
