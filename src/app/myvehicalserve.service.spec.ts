/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { MyvehicalserveService } from './myvehicalserve.service';

describe('MyvehicalserveService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyvehicalserveService]
    });
  });

  it('should ...', inject([MyvehicalserveService], (service: MyvehicalserveService) => {
    expect(service).toBeTruthy();
  }));
});


