import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildString } from './child-string';

describe('ChildString', () => {
  let component: ChildString;
  let fixture: ComponentFixture<ChildString>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildString]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildString);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
