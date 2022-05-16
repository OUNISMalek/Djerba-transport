import { TestBed } from '@angular/core/testing';

import { SuivieService } from './suivie.service';

describe('SuivieService', () => {
  let service: SuivieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuivieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
