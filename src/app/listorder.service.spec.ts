import { TestBed } from '@angular/core/testing';

import { ListorderService } from './listorder.service';

describe('ListorderService', () => {
  let service: ListorderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListorderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
