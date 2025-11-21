import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlAngularSanitazer } from './html-angular-sanitazer';

describe('HtmlAngularSanitazer', () => {
  let component: HtmlAngularSanitazer;
  let fixture: ComponentFixture<HtmlAngularSanitazer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlAngularSanitazer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlAngularSanitazer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
