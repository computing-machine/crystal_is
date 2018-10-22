import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointOfSaleContentComponent } from './point-of-sale-content.component';

describe('PointOfSaleContentComponent', () => {
  let component: PointOfSaleContentComponent;
  let fixture: ComponentFixture<PointOfSaleContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointOfSaleContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointOfSaleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
