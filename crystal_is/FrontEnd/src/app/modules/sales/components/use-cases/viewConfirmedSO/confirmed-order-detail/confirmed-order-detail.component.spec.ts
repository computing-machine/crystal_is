import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedOrderDetailComponent } from './confirmed-order-detail.component';

describe('ConfirmedOrderDetailComponent', () => {
  let component: ConfirmedOrderDetailComponent;
  let fixture: ComponentFixture<ConfirmedOrderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedOrderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedOrderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
