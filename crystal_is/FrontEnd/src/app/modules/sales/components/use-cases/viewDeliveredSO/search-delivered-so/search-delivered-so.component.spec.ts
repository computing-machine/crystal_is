import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeliveredSOComponent } from './search-delivered-so.component';

describe('SearchDeliveredSOComponent', () => {
  let component: SearchDeliveredSOComponent;
  let fixture: ComponentFixture<SearchDeliveredSOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDeliveredSOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeliveredSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
