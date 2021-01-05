import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestscheduledComponent } from './testscheduled.component';

describe('TestscheduledComponent', () => {
  let component: TestscheduledComponent;
  let fixture: ComponentFixture<TestscheduledComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestscheduledComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestscheduledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
