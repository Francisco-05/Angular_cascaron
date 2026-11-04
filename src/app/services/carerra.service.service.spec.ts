/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Carerra.serviceService } from './carerra.service.service';

describe('Service: Carerra.service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Carerra.serviceService]
    });
  });

  it('should ...', inject([Carerra.serviceService], (service: Carerra.serviceService) => {
    expect(service).toBeTruthy();
  }));
});
