import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIntermediaryComponent } from './add-intermediary.component';

describe('AddIntermediaryComponent', () => {
  let component: AddIntermediaryComponent;
  let fixture: ComponentFixture<AddIntermediaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIntermediaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIntermediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
