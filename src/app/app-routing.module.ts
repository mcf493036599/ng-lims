import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {PageNotFoundComponent} from "./error/page-not-found/page-not-found.component";
import {InstrumentComponent} from "./instrument/instrument/instrument.component";
import {InstrumentTestComponent} from "./instrument/instrument-test/instrument-test.component";
import {InstrumentListComponent} from "./instrument/instrument-list/instrument-list.component";
import {InstrumentDetailComponent} from "./instrument/instrument-detail/instrument-detail.component";
import {CalendarDemoComponent} from "./calendar-demo/calendar-demo.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'instrument',
    //loadChildren: 'app/instrument/instrument.module#InstrumentModule'
    component: InstrumentComponent,
    children: [

      {
        path: "instrument-list",
        component: InstrumentListComponent
        //outlet: "instrumentOutlet"
      },
      {
        path: "instrument-detail/:id",
        component: InstrumentDetailComponent
        // outlet: "instrumentOutlet"
      }
    ]
  },
  {
    path: 'calendar-test',
    component: CalendarDemoComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
