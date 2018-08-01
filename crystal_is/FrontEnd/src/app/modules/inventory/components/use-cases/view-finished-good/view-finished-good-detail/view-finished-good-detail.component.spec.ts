import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFinishedGoodDetailComponent } from './view-finished-good-detail.component';

describe('ViewFinishedGoodDetailComponent', () => {
  let component: ViewFinishedGoodDetailComponent;
  let fixture: ComponentFixture<ViewFinishedGoodDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewFinishedGoodDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFinishedGoodDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
