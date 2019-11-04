import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevAllComponent } from './dev-all.component';

describe('DevAllComponent', () => {
  let component: DevAllComponent;
  let fixture: ComponentFixture<DevAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
