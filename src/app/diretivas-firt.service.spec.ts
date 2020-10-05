import { TestBed } from '@angular/core/testing';

import { DiretivasFirtService } from './diretivas-firt.service';

describe('DiretivasFirtService', () => {
  let service: DiretivasFirtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiretivasFirtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
