import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateassessmentComponent } from './createassessment.component';

describe('CreateassessmentComponent', () => {
  let component: CreateassessmentComponent;
  let fixture: ComponentFixture<CreateassessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateassessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateassessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
