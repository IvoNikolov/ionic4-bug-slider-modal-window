import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderArrayPageRoutingModule } from './slider-array-routing.module';

import { SliderArrayPage } from './slider-array.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderArrayPageRoutingModule
  ],
  declarations: [SliderArrayPage]
})
export class SliderArrayPageModule {}
