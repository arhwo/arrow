import { TestBed } from '@angular/core/testing';

import { OmniSidenavService } from './omni-sidenav.service';

describe('OmniSidenavService', () => {
  let service: OmniSidenavService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OmniSidenavService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
