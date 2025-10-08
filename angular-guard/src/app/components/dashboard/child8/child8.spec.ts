import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child8 } from './child8';

describe('Child8', () => {
  let component: Child8;
  let fixture: ComponentFixture<Child8>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child8]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child8);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
