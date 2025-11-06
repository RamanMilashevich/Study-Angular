import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsChild1 } from './signals-child1';

describe('SignalsChild1', () => {
  let component: SignalsChild1;
  let fixture: ComponentFixture<SignalsChild1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsChild1]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignalsChild1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
