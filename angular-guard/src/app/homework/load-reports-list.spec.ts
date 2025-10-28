import { TestBed } from '@angular/core/testing';

import { LoadReportsList } from './load-reports-list';

describe('LoadReportsList', () => {
  let service: LoadReportsList;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadReportsList);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
