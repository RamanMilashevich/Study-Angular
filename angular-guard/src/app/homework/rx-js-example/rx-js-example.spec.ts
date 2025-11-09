import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsExample } from './rx-js-example';

describe('RxJsExample', () => {
  let component: RxJsExample;
  let fixture: ComponentFixture<RxJsExample>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsExample]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsExample);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
