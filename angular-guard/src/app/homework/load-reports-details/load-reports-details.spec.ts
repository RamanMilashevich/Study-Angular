import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadReportsDetails } from './load-reports-details';

describe('LoadReportsDetails', () => {
  let component: LoadReportsDetails;
  let fixture: ComponentFixture<LoadReportsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadReportsDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadReportsDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
