import { TestBed } from '@angular/core/testing';
import { Recepty } from './recepty';

describe('Recepty', () => {
  let service: Recepty;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Recepty);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
