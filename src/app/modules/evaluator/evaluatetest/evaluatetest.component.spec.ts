import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluatetestComponent } from './evaluatetest.component';

describe('EvaluatetestComponent', () => {
  let component: EvaluatetestComponent;
  let fixture: ComponentFixture<EvaluatetestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluatetestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluatetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
