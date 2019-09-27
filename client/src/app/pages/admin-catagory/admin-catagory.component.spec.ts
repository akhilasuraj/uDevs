import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCatagoryComponent } from './admin-catagory.component';

describe('AdminCatagoryComponent', () => {
  let component: AdminCatagoryComponent;
  let fixture: ComponentFixture<AdminCatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
