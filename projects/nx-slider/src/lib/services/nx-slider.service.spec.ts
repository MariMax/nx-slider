import { TestBed } from '@angular/core/testing';

import { NxSliderService } from './nx-slider.service';

describe('NxSliderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NxSliderService = TestBed.get(NxSliderService);
    expect(service).toBeTruthy();
  });
});
