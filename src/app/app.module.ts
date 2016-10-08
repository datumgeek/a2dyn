import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SessionService } from './session.service';
import { ShellComponent } from './shell/shell.component';
import { ComposeComponent } from './compose/compose.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    ComposeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SessionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
