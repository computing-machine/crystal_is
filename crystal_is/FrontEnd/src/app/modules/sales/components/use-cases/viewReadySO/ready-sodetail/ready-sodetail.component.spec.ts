import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadySODetailComponent } from './ready-sodetail.component';

describe('ReadySODetailComponent', () => {
  let component: ReadySODetailComponent;
  let fixture: ComponentFixture<ReadySODetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadySODetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadySODetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
