import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagesessionComponent } from './managesession.component';

describe('ManagesessionComponent', () => {
  let component: ManagesessionComponent;
  let fixture: ComponentFixture<ManagesessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagesessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagesessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
