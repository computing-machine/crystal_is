import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewNonManufacturedItemDetailComponent } from './view-non-manufactured-item-detail.component';

describe('ViewNonManufacturedItemDetailComponent', () => {
  let component: ViewNonManufacturedItemDetailComponent;
  let fixture: ComponentFixture<ViewNonManufacturedItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewNonManufacturedItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewNonManufacturedItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
