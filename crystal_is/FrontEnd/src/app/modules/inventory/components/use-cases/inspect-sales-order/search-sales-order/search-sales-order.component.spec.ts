import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSalesOrderComponent } from './search-sales-order.component';

describe('SearchSalesOrderComponent', () => {
  let component: SearchSalesOrderComponent;
  let fixture: ComponentFixture<SearchSalesOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSalesOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSalesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
