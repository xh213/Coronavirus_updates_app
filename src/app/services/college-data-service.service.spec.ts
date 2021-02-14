import { TestBed } from '@angular/core/testing';

import { CollegeDataServiceService } from './college-data-service.service';

describe('CollegeDataServiceService', () => {
  let service: CollegeDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CollegeDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
