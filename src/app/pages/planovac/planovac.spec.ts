import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Planovac } from './planovac';

describe('Planovac', () => {
  let component: Planovac;
  let fixture: ComponentFixture<Planovac>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Planovac],
    }).compileComponents();

    fixture = TestBed.createComponent(Planovac);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
