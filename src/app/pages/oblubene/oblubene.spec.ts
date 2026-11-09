import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Oblubene } from './oblubene';

describe('Oblubene', () => {
  let component: Oblubene;
  let fixture: ComponentFixture<Oblubene>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Oblubene],
    }).compileComponents();

    fixture = TestBed.createComponent(Oblubene);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
