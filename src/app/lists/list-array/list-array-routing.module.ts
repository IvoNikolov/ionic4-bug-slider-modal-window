import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListArrayPage } from './list-array.page';

const routes: Routes = [
  {
    path: '',
    component: ListArrayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListArrayPageRoutingModule {}
