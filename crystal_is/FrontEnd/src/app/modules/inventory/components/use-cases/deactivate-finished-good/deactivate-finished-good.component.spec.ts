import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateFinishedGoodComponent } from './deactivate-finished-good.component';

describe('DeactivateFinishedGoodComponent', () => {
  let component: DeactivateFinishedGoodComponent;
  let fixture: ComponentFixture<DeactivateFinishedGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivateFinishedGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateFinishedGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
