import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSalesOrderComponent } from './update-sales-order.component';

describe('UpdateSalesOrderComponent', () => {
  let component: UpdateSalesOrderComponent;
  let fixture: ComponentFixture<UpdateSalesOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateSalesOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSalesOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
