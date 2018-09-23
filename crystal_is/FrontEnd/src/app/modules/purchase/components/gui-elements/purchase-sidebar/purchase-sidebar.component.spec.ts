import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseSidebarComponent } from './purchase-sidebar.component';

describe('PurchaseSidebarComponent', () => {
  let component: PurchaseSidebarComponent;
  let fixture: ComponentFixture<PurchaseSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
