import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointOfSaleSidebarComponent } from './point-of-sale-sidebar.component';

describe('PointOfSaleSidebarComponent', () => {
  let component: PointOfSaleSidebarComponent;
  let fixture: ComponentFixture<PointOfSaleSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointOfSaleSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointOfSaleSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
