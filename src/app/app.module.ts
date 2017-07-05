import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeModule} from "./home/home.module";
import {AboutModule} from "./about/about.module";
import {ErrorModule} from "./error/error.module";
import {ShareService} from "./service/share.service";
import {ApolloClient, createNetworkInterface} from 'apollo-client';
import {ApolloModule} from 'apollo-angular';
import {GqlService} from "./service/gql.service";
import { CalendarDemoComponent } from './calendar-demo/calendar-demo.component';
import {ScheduleModule} from 'primeng/primeng';
import {UserModule} from "./user/user.module";


//create apollo graphql client
const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: "http://localhost:8000/graphql"
  }),
});
export function provideClient(): ApolloClient {
  return client;
}

@NgModule({
  declarations: [
    AppComponent,
    CalendarDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ApolloModule.forRoot(provideClient),
    HomeModule,
    AboutModule,
    ErrorModule,
    // InstrumentModule,
    ScheduleModule,
    UserModule,
    AppRoutingModule

  ],
  providers: [
    GqlService,
    //LimsRestService,
    ShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
