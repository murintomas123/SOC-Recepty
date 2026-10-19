import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recepty } from './recepty';

describe('Recepty', () => {
  let component: Recepty;
  let fixture: ComponentFixture<Recepty>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recepty],
    }).compileComponents();

    fixture = TestBed.createComponent(Recepty);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
