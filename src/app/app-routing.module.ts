import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {PageNotFoundComponent} from "./error/page-not-found/page-not-found.component";
import {CalendarDemoComponent} from "./calendar-demo/calendar-demo.component";
import {SignInComponent} from "./user/sign-in/sign-in.component";
import {SignUpComponent} from "./user/sign-up/sign-up.component";

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
    path: 'sign-in',
    component: SignInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'instrument',
    loadChildren: 'app/instrument/instrument.module#InstrumentModule'
    // component: InstrumentComponent,
    // children: [
    //
    //   {
    //     path: "instrument-list",
    //     component: InstrumentListComponent
    //     //outlet: "instrumentOutlet"
    //   },
    //   {
    //     path: "instrument-detail/:id",
    //     component: InstrumentDetailComponent
    //     // outlet: "instrumentOutlet"
    //   }
    // ]
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
