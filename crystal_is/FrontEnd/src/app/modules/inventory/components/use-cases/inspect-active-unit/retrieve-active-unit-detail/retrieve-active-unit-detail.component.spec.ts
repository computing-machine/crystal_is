import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveActiveUnitDetailComponent } from './retrieve-active-unit-detail.component';

describe('RetrieveActiveUnitDetailComponent', () => {
  let component: RetrieveActiveUnitDetailComponent;
  let fixture: ComponentFixture<RetrieveActiveUnitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveActiveUnitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveActiveUnitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
