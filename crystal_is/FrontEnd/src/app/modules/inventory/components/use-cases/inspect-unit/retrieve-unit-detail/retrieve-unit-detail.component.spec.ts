import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveUnitDetailComponent } from './retrieve-unit-detail.component';

describe('RetrieveUnitDetailComponent', () => {
  let component: RetrieveUnitDetailComponent;
  let fixture: ComponentFixture<RetrieveUnitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveUnitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveUnitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
