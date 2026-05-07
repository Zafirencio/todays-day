import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navegacio } from './navegacio';

describe('Navegacio', () => {
  let component: Navegacio;
  let fixture: ComponentFixture<Navegacio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navegacio]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navegacio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
