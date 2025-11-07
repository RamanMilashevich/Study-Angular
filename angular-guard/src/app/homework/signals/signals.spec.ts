import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsParent } from './signals';

describe('Signals', () => {
  let component: SignalsParent;
  let fixture: ComponentFixture<SignalsParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
