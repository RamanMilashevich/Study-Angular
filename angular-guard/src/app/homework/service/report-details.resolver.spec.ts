import { TestBed } from '@angular/core/testing';

import { ReportDetailsResolver } from './report-details.resolver';

describe('ReportDetailsResolver', () => {
  let service: ReportDetailsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportDetailsResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
