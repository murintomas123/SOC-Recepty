import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Zoznam } from './zoznam';

describe('Zoznam', () => {
  let component: Zoznam;
  let fixture: ComponentFixture<Zoznam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Zoznam],
    }).compileComponents();

    fixture = TestBed.createComponent(Zoznam);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
