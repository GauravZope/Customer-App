import { TestBed } from '@angular/core/testing';

import { CountryMstService } from './country-mst.service';

describe('CountryMstService', () => {
  let service: CountryMstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryMstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
