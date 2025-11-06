import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnpushStrategy } from './onpush-strategy';

describe('OnpushStrategy', () => {
  let component: OnpushStrategy;
  let fixture: ComponentFixture<OnpushStrategy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnpushStrategy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnpushStrategy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
