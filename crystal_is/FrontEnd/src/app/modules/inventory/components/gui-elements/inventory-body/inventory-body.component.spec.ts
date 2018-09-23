import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryBodyComponent } from './inventory-body.component';

describe('InventoryBodyComponent', () => {
  let component: InventoryBodyComponent;
  let fixture: ComponentFixture<InventoryBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
