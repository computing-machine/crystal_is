import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCusComponent } from './search-cus.component';

describe('SearchCusComponent', () => {
  let component: SearchCusComponent;
  let fixture: ComponentFixture<SearchCusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
