import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListordersComponent} from "../listorders/listorders.component";

const routes: Routes = [
  {path: 'listorders', component: ListordersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutesRoutingModule {
}
