import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFinishedGoodComponent } from './update-finished-good.component';

describe('UpdateFinishedGoodComponent', () => {
  let component: UpdateFinishedGoodComponent;
  let fixture: ComponentFixture<UpdateFinishedGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateFinishedGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFinishedGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
