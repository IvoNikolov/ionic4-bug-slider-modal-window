import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderObjectPageRoutingModule } from './slider-object-routing.module';

import { SliderObjectPage } from './slider-object.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SliderObjectPageRoutingModule
  ],
  declarations: [SliderObjectPage]
})
export class SliderObjectPageModule {}
