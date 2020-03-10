import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxChatComponent } from './ngx-chat.component';

describe('NgxChatComponent', () => {
  let component: NgxChatComponent;
  let fixture: ComponentFixture<NgxChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
