import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliViewNotificationComponent } from './cli-view-notification.component';

describe('CliViewNotificationComponent', () => {
  let component: CliViewNotificationComponent;
  let fixture: ComponentFixture<CliViewNotificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliViewNotificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliViewNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
