import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevProjectComponent } from './dev-project.component';

describe('DevProjectComponent', () => {
  let component: DevProjectComponent;
  let fixture: ComponentFixture<DevProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
