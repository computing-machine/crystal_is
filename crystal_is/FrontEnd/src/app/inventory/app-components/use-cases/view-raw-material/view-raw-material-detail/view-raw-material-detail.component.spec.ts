import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRawMaterialDetailComponent } from './view-raw-material-detail.component';

describe('ViewRawMaterialDetailComponent', () => {
  let component: ViewRawMaterialDetailComponent;
  let fixture: ComponentFixture<ViewRawMaterialDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRawMaterialDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRawMaterialDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
