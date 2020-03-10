import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {NgxChatModule} from '../../projects/pazznetwork/ngx-chat/src/lib/ngx-chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        NgxChatModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
