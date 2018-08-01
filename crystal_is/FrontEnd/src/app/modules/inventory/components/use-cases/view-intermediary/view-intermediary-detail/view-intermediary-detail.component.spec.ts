import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIntermediaryDetailComponent } from './view-intermediary-detail.component';

describe('ViewIntermediaryDetailComponent', () => {
  let component: ViewIntermediaryDetailComponent;
  let fixture: ComponentFixture<ViewIntermediaryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewIntermediaryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewIntermediaryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
