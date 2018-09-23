import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateRawMaterialComponent } from './deactivate-raw-material.component';

describe('DeactivateRawMaterialComponent', () => {
  let component: DeactivateRawMaterialComponent;
  let fixture: ComponentFixture<DeactivateRawMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivateRawMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateRawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
