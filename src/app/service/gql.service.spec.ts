import { TestBed, inject } from '@angular/core/testing';

import { GqlService } from './gql.service';

describe('GqlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GqlService]
    });
  });

  it('should be created', inject([GqlService], (service: GqlService) => {
    expect(service).toBeTruthy();
  }));
});
