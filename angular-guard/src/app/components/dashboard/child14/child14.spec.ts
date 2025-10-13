import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child14 } from './child14';

describe('Child14', () => {
  let component: Child14;
  let fixture: ComponentFixture<Child14>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child14]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child14);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
