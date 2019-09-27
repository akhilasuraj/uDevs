import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliCatagoryComponent } from './cli-catagory.component';

describe('CliCatagoryComponent', () => {
  let component: CliCatagoryComponent;
  let fixture: ComponentFixture<CliCatagoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliCatagoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliCatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
