import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    HttpModule,
    SharedModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
