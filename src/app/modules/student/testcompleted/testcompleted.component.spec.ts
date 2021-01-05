import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestcompletedComponent } from './testcompleted.component';

describe('TestcompletedComponent', () => {
  let component: TestcompletedComponent;
  let fixture: ComponentFixture<TestcompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestcompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestcompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
