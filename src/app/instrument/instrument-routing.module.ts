import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InstrumentComponent} from "./instrument/instrument.component";
import {InstrumentListComponent} from "./instrument-list/instrument-list.component";

const routes: Routes = [
  {
    path: "",
    component: InstrumentComponent,
    children: [
      {
        path: "by-department/:id",
        component: InstrumentListComponent
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
