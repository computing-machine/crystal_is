import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveredSODetailComponent } from './delivered-sodetail.component';

describe('DeliveredSODetailComponent', () => {
  let component: DeliveredSODetailComponent;
  let fixture: ComponentFixture<DeliveredSODetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveredSODetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveredSODetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
