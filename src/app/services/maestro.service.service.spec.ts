/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Maestro.serviceService } from './maestro.service.service';

describe('Service: Maestro.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Maestro.serviceService]
    });
  });

  it('should ...', inject([Maestro.serviceService], (service: Maestro.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
