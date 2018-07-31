import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchRawMaterialComponent } from './search-raw-material.component';

describe('SearchRawMaterialComponent', () => {
  let component: SearchRawMaterialComponent;
  let fixture: ComponentFixture<SearchRawMaterialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchRawMaterialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchRawMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
