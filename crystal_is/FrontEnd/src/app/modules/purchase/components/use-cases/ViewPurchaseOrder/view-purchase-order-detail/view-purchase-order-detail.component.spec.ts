import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPurchaseOrderDetailComponent } from './view-purchase-order-detail.component';

describe('ViewPurchaseOrderDetailComponent', () => {
  let component: ViewPurchaseOrderDetailComponent;
  let fixture: ComponentFixture<ViewPurchaseOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPurchaseOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPurchaseOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
