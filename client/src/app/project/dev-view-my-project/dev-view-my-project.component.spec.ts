import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevViewMyProjectComponent } from './dev-view-my-project.component';

describe('DevViewMyProjectComponent', () => {
  let component: DevViewMyProjectComponent;
  let fixture: ComponentFixture<DevViewMyProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevViewMyProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevViewMyProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
