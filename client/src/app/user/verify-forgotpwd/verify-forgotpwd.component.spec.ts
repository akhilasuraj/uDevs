import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyForgotpwdComponent } from './verify-forgotpwd.component';

describe('VerifyForgotpwdComponent', () => {
  let component: VerifyForgotpwdComponent;
  let fixture: ComponentFixture<VerifyForgotpwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyForgotpwdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyForgotpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
