import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsChild2 } from './signals-child2';

describe('SignalsChild2', () => {
  let component: SignalsChild2;
  let fixture: ComponentFixture<SignalsChild2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsChild2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsChild2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
