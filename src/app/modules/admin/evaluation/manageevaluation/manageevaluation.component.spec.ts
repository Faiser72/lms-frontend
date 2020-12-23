import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageevaluationComponent } from './manageevaluation.component';

describe('ManageevaluationComponent', () => {
  let component: ManageevaluationComponent;
  let fixture: ComponentFixture<ManageevaluationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageevaluationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageevaluationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
