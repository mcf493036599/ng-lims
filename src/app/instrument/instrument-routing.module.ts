import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InstrumentComponent} from "./instrument/instrument.component";
import {InstrumentListComponent} from "./instrument-list/instrument-list.component";
import {InstrumentTestComponent} from "./instrument-test/instrument-test.component";
import {InstrumentDetailComponent} from "./instrument-detail/instrument-detail.component";

const routes: Routes = [
  {
    path: "",
    component: InstrumentComponent,
    children: [
      {
        path: "instrument-list",
        component: InstrumentListComponent,
        outlet: "instrumentOutlet"
      },
      {
        path: "instrument-detail",
        component: InstrumentDetailComponent,
        outlet: "instrumentOutlet"
      },
      {
        path: "test",
        component: InstrumentTestComponent,
        outlet: "instrumentOutlet"
      },
      {
        path: "test2",
        component: InstrumentTestComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstrumentRoutingModule {
}
