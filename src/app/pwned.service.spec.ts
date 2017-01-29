/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PwnedService } from './pwned.service';

describe('PwnedService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PwnedService]
    });
  });

  it('should ...', inject([PwnedService], (service: PwnedService) => {
    expect(service).toBeTruthy();
  }));
});
