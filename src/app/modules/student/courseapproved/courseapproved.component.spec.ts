import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseapprovedComponent } from './courseapproved.component';

describe('CourseapprovedComponent', () => {
  let component: CourseapprovedComponent;
  let fixture: ComponentFixture<CourseapprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseapprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseapprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
