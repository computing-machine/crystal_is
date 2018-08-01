import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewManufacturedItemDetailComponent } from './view-manufactured-item-detail.component';

describe('ViewManufacturedItemDetailComponent', () => {
  let component: ViewManufacturedItemDetailComponent;
  let fixture: ComponentFixture<ViewManufacturedItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewManufacturedItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewManufacturedItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
