import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child12 } from './child12';

describe('Child12', () => {
  let component: Child12;
  let fixture: ComponentFixture<Child12>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child12]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child12);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
