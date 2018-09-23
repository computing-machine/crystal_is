import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateUnitComponent } from './deactivate-unit.component';

describe('DeactivateUnitComponent', () => {
  let component: DeactivateUnitComponent;
  let fixture: ComponentFixture<DeactivateUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivateUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
