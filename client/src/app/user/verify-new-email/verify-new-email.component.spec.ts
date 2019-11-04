import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyNewEmailComponent } from './verify-new-email.component';

describe('VerifyNewEmailComponent', () => {
  let component: VerifyNewEmailComponent;
  let fixture: ComponentFixture<VerifyNewEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyNewEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyNewEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
