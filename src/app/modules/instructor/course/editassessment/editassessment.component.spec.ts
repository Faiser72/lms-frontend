import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditassessmentComponent } from './editassessment.component';

describe('EditassessmentComponent', () => {
  let component: EditassessmentComponent;
  let fixture: ComponentFixture<EditassessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditassessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditassessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
