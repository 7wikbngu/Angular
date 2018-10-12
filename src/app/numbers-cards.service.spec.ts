import { TestBed } from '@angular/core/testing';

import { NumbersCardsService } from './numbers-cards.service';

describe('NumbersCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumbersCardsService = TestBed.get(NumbersCardsService);
    expect(service).toBeTruthy();
  });
});
