import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListArrayPageRoutingModule } from './list-array-routing.module';

import { ListArrayPage } from './list-array.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListArrayPageRoutingModule
  ],
  declarations: [ListArrayPage]
})
export class ListArrayPageModule {}
