import { ComponentFixture, TestBed } from '@angular/core/testing';

import { New2 } from './new2';

describe('New2', () => {
  let component: New2;
  let fixture: ComponentFixture<New2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [New2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(New2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
