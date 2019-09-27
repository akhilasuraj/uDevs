import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevCatagoryComponent } from './dev-catagory.component';

describe('DevCatagoryComponent', () => {
  let component: DevCatagoryComponent;
  let fixture: ComponentFixture<DevCatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevCatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
