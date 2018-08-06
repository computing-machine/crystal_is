import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchConfirmedSOComponent } from './search-confirmed-so.component';

describe('SearchConfirmedSOComponent', () => {
  let component: SearchConfirmedSOComponent;
  let fixture: ComponentFixture<SearchConfirmedSOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchConfirmedSOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchConfirmedSOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
