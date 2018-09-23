import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPurchaseOrderComponent } from './search-purchase-order.component';

describe('SearchPurchaseOrderComponent', () => {
  let component: SearchPurchaseOrderComponent;
  let fixture: ComponentFixture<SearchPurchaseOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPurchaseOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
