import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeactivateNonProcessLineItemComponent } from './deactivate-non-process-line-item.component';

describe('DeactivateNonProcessLineItemComponent', () => {
  let component: DeactivateNonProcessLineItemComponent;
  let fixture: ComponentFixture<DeactivateNonProcessLineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeactivateNonProcessLineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeactivateNonProcessLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
