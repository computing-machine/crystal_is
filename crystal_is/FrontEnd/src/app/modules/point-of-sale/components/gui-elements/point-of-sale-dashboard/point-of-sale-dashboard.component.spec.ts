import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointOfSaleDashboardComponent } from './point-of-sale-dashboard.component';

describe('PointOfSaleDashboardComponent', () => {
  let component: PointOfSaleDashboardComponent;
  let fixture: ComponentFixture<PointOfSaleDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointOfSaleDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointOfSaleDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
