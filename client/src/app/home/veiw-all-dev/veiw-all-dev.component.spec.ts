import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiwAllDevComponent } from './veiw-all-dev.component';

describe('VeiwAllDevComponent', () => {
  let component: VeiwAllDevComponent;
  let fixture: ComponentFixture<VeiwAllDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VeiwAllDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiwAllDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
