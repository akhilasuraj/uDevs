import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CliAllComponent } from './cli-all.component';

describe('CliAllComponent', () => {
  let component: CliAllComponent;
  let fixture: ComponentFixture<CliAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CliAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CliAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
