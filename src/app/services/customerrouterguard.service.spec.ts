import { TestBed } from '@angular/core/testing';

import { CustomerrouterguardService } from './customerrouterguard.service';

describe('CustomerrouterguardService', () => {
  let service: CustomerrouterguardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerrouterguardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
