import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrivenForm } from './templatedriven-form';

describe('TemplatedrivenForm', () => {
  let component: TemplatedrivenForm;
  let fixture: ComponentFixture<TemplatedrivenForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplatedrivenForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplatedrivenForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
