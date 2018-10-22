import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveNonProcessLineItemDetailComponent } from './retrieve-non-process-line-item-detail.component';

describe('RetrieveNonProcessLineItemDetailComponent', () => {
  let component: RetrieveNonProcessLineItemDetailComponent;
  let fixture: ComponentFixture<RetrieveNonProcessLineItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetrieveNonProcessLineItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetrieveNonProcessLineItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
