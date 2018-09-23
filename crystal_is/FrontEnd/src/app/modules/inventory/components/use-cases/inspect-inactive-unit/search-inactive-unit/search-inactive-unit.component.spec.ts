import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInactiveUnitComponent } from './search-inactive-unit.component';

describe('SearchInactiveUnitComponent', () => {
  let component: SearchInactiveUnitComponent;
  let fixture: ComponentFixture<SearchInactiveUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInactiveUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInactiveUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
