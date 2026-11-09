import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Vytvorit } from './vytvorit';

describe('Vytvorit', () => {
  let component: Vytvorit;
  let fixture: ComponentFixture<Vytvorit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vytvorit],
    }).compileComponents();

    fixture = TestBed.createComponent(Vytvorit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
