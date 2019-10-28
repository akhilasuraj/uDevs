import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyMsgComponent } from './verify-msg.component';

describe('VerifyMsgComponent', () => {
  let component: VerifyMsgComponent;
  let fixture: ComponentFixture<VerifyMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
