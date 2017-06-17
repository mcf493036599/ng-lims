import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";
import {AboutModule} from "./about/about.module";
import {ErrorModule} from "./error/error.module";
import {InstrumentModule} from "./instrument/instrument.module";
import {LimsRestService} from "./service/lims-rest.service";
import {ShareService} from "./service/share.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    HomeModule,
    AboutModule,
    ErrorModule,
    InstrumentModule
  ],
  providers: [
    LimsRestService,
    ShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
