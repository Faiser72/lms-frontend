import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageassessmentComponent } from './manageassessment.component';

describe('ManageassessmentComponent', () => {
  let component: ManageassessmentComponent;
  let fixture: ComponentFixture<ManageassessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageassessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageassessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
