import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadanswersComponent } from './uploadanswers.component';

describe('UploadanswersComponent', () => {
  let component: UploadanswersComponent;
  let fixture: ComponentFixture<UploadanswersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadanswersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadanswersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
