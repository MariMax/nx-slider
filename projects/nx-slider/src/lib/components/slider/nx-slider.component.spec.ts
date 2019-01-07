import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NxSliderComponent } from './nx-slider.component';

describe('NxSliderComponent', () => {
  let component: NxSliderComponent;
  let fixture: ComponentFixture<NxSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NxSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NxSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
