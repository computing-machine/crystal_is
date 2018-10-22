import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterNonProcessLineItemComponent } from './register-non-process-line-item.component';

describe('RegisterNonProcessLineItemComponent', () => {
  let component: RegisterNonProcessLineItemComponent;
  let fixture: ComponentFixture<RegisterNonProcessLineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterNonProcessLineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterNonProcessLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
