import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveSalesOrderDetailComponent } from './retrieve-sales-order-detail.component';

describe('RetrieveSalesOrderDetailComponent', () => {
  let component: RetrieveSalesOrderDetailComponent;
  let fixture: ComponentFixture<RetrieveSalesOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveSalesOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveSalesOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
