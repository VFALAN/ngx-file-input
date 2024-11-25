import { TestBed } from '@angular/core/testing';

import { NgxFileInputService } from './ngx-file-input.service';

describe('NgxFileInputService', () => {
  let service: NgxFileInputService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxFileInputService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
