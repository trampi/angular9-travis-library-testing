import { TestBed } from '@angular/core/testing';

import { NgxChatService } from './ngx-chat.service';

describe('NgxChatService', () => {
  let service: NgxChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
