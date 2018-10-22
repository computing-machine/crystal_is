import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointOfSaleBodyComponent } from './point-of-sale-body.component';

describe('PointOfSaleBodyComponent', () => {
  let component: PointOfSaleBodyComponent;
  let fixture: ComponentFixture<PointOfSaleBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointOfSaleBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointOfSaleBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
