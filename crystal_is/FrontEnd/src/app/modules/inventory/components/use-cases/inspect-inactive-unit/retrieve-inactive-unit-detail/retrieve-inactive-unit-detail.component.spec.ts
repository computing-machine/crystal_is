import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveInactiveUnitDetailComponent } from './retrieve-inactive-unit-detail.component';

describe('RetrieveInactiveUnitDetailComponent', () => {
  let component: RetrieveInactiveUnitDetailComponent;
  let fixture: ComponentFixture<RetrieveInactiveUnitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveInactiveUnitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveInactiveUnitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
