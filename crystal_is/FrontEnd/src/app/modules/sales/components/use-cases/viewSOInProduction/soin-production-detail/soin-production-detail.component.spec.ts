import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SOInProductionDetailComponent } from './soin-production-detail.component';

describe('SOInProductionDetailComponent', () => {
  let component: SOInProductionDetailComponent;
  let fixture: ComponentFixture<SOInProductionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SOInProductionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SOInProductionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
