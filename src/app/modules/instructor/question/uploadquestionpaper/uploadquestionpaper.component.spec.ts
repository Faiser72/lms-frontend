import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadquestionpaperComponent } from './uploadquestionpaper.component';

describe('UploadquestionpaperComponent', () => {
  let component: UploadquestionpaperComponent;
  let fixture: ComponentFixture<UploadquestionpaperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadquestionpaperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadquestionpaperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
