import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsConvertObservable } from './signals-convert-observable';

describe('SignalsConvertObservable', () => {
  let component: SignalsConvertObservable;
  let fixture: ComponentFixture<SignalsConvertObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsConvertObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsConvertObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
