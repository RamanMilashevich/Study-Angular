import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadReportsList } from './load-reports-list';

describe('LoadReportsList', () => {
  let component: LoadReportsList;
  let fixture: ComponentFixture<LoadReportsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadReportsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadReportsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
