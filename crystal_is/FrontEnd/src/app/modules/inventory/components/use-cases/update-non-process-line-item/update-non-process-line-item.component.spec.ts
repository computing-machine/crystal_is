import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNonProcessLineItemComponent } from './update-non-process-line-item.component';

describe('UpdateNonProcessLineItemComponent', () => {
  let component: UpdateNonProcessLineItemComponent;
  let fixture: ComponentFixture<UpdateNonProcessLineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNonProcessLineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNonProcessLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
