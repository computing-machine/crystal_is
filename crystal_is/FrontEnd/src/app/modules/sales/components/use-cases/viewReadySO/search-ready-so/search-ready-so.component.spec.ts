import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReadySOComponent } from './search-ready-so.component';

describe('SearchReadySOComponent', () => {
  let component: SearchReadySOComponent;
  let fixture: ComponentFixture<SearchReadySOComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchReadySOComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchReadySOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
