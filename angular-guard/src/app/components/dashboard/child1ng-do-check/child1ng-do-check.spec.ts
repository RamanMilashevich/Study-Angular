import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1ngDoCheck } from './child1ng-do-check';

describe('Child1ngDoCheck', () => {
  let component: Child1ngDoCheck;
  let fixture: ComponentFixture<Child1ngDoCheck>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child1ngDoCheck]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1ngDoCheck);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
