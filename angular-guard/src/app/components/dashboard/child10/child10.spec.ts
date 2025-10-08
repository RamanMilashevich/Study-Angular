import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child10 } from './child10';

describe('Child10', () => {
  let component: Child10;
  let fixture: ComponentFixture<Child10>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child10]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child10);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
