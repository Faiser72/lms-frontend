import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageassignmentComponent } from './manageassignment.component';

describe('ManageassignmentComponent', () => {
  let component: ManageassignmentComponent;
  let fixture: ComponentFixture<ManageassignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageassignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageassignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
