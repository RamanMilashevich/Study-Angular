import { TestBed } from '@angular/core/testing';

import { LoadReportsDetails } from './load-reports-details';

describe('LoadReportsDetails', () => {
  let service: LoadReportsDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadReportsDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
