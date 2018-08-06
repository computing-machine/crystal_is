import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEstimateComponent } from './search-estimate.component';

describe('SearchEstimateComponent', () => {
  let component: SearchEstimateComponent;
  let fixture: ComponentFixture<SearchEstimateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchEstimateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchEstimateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
