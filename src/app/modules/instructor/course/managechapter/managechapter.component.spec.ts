import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagechapterComponent } from './managechapter.component';

describe('ManagechapterComponent', () => {
  let component: ManagechapterComponent;
  let fixture: ComponentFixture<ManagechapterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagechapterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagechapterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
