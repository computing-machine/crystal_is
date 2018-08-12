import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFinishedGoodComponent } from './add-finished-good.component';

describe('AddFinishedGoodComponent', () => {
  let component: AddFinishedGoodComponent;
  let fixture: ComponentFixture<AddFinishedGoodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFinishedGoodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFinishedGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
