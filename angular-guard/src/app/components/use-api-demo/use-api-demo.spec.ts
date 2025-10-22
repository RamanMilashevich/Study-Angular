import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseApiDemo } from './use-api-demo';

describe('UseApiDemo', () => {
  let component: UseApiDemo;
  let fixture: ComponentFixture<UseApiDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UseApiDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseApiDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
