import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsMethods } from './signals-methods';

describe('SignalsMethods', () => {
  let component: SignalsMethods;
  let fixture: ComponentFixture<SignalsMethods>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsMethods]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsMethods);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
