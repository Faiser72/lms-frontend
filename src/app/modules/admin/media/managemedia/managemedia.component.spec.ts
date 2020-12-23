import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagemediaComponent } from './managemedia.component';

describe('ManagemediaComponent', () => {
  let component: ManagemediaComponent;
  let fixture: ComponentFixture<ManagemediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagemediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagemediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
