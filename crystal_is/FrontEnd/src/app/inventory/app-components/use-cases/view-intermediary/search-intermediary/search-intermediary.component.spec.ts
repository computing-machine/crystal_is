import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchIntermediaryComponent } from './search-intermediary.component';

describe('SearchIntermediaryComponent', () => {
  let component: SearchIntermediaryComponent;
  let fixture: ComponentFixture<SearchIntermediaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchIntermediaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchIntermediaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
