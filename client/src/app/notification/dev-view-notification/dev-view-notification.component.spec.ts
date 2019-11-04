import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevViewNotificationComponent } from './dev-view-notification.component';

describe('DevViewNotificationComponent', () => {
  let component: DevViewNotificationComponent;
  let fixture: ComponentFixture<DevViewNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevViewNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevViewNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
