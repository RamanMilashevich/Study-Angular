import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child1ngOnChanges } from './child1ng-on-changes';

describe('Child1ngOnChanges', () => {
  let component: Child1ngOnChanges;
  let fixture: ComponentFixture<Child1ngOnChanges>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child1ngOnChanges]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child1ngOnChanges);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
