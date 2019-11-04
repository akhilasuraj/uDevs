import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMoreProjectComponent } from './view-more-project.component';

describe('ViewMoreProjectComponent', () => {
  let component: ViewMoreProjectComponent;
  let fixture: ComponentFixture<ViewMoreProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMoreProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMoreProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
