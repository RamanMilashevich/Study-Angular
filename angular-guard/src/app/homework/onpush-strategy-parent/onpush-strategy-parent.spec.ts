import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushStrategyParent } from './onpush-strategy-parent';

describe('OnpushStrategyParent', () => {
  let component: OnpushStrategyParent;
  let fixture: ComponentFixture<OnpushStrategyParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnpushStrategyParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpushStrategyParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
