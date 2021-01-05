import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewevaluateComponent } from './viewevaluate.component';

describe('ViewevaluateComponent', () => {
  let component: ViewevaluateComponent;
  let fixture: ComponentFixture<ViewevaluateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewevaluateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewevaluateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
