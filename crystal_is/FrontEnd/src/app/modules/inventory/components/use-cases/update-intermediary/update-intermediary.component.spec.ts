import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateIntermediaryComponent } from './update-intermediary.component';

describe('UpdateIntermediaryComponent', () => {
  let component: UpdateIntermediaryComponent;
  let fixture: ComponentFixture<UpdateIntermediaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateIntermediaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateIntermediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
