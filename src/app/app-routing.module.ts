import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'list-array',
    loadChildren: () => import('./lists/list-array/list-array.module').then( m => m.ListArrayPageModule)
  },
  {
    path: 'list-subject',
    loadChildren: () => import('./lists/list-subject/list-subject.module').then( m => m.ListSubjectPageModule)
  },
  {
    path: 'slider-array',
    loadChildren: () => import('./sliders/slider-array/slider-array.module').then( m => m.SliderArrayPageModule)
  },
  {
    path: 'slider-object',
    loadChildren: () => import('./sliders/slider-object/slider-object.module').then( m => m.SliderObjectPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
