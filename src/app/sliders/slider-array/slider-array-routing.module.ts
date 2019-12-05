import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SliderArrayPage } from './slider-array.page';

const routes: Routes = [
  {
    path: '',
    component: SliderArrayPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SliderArrayPageRoutingModule {}
