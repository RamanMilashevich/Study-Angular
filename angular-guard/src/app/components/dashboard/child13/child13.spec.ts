import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Child13 } from './child13';

describe('Child13', () => {
  let component: Child13;
  let fixture: ComponentFixture<Child13>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Child13]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Child13);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
