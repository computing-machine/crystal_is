import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNonProcessLineItemComponent } from './search-non-process-line-item.component';

describe('SearchNonProcessLineItemComponent', () => {
  let component: SearchNonProcessLineItemComponent;
  let fixture: ComponentFixture<SearchNonProcessLineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchNonProcessLineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchNonProcessLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
