import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child7 } from './child7';

describe('Child7', () => {
  let component: Child7;
  let fixture: ComponentFixture<Child7>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child7]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child7);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
