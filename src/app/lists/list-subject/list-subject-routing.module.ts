import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSubjectPage } from './list-subject.page';

const routes: Routes = [
  {
    path: '',
    component: ListSubjectPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListSubjectPageRoutingModule {}
