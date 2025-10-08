import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child9 } from './child9';

describe('Child9', () => {
  let component: Child9;
  let fixture: ComponentFixture<Child9>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child9]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child9);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
