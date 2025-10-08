import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child11 } from './child11';

describe('Child11', () => {
  let component: Child11;
  let fixture: ComponentFixture<Child11>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child11]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child11);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
