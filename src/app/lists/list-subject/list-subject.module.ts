import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListSubjectPageRoutingModule } from './list-subject-routing.module';

import { ListSubjectPage } from './list-subject.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListSubjectPageRoutingModule
  ],
  declarations: [ListSubjectPage]
})
export class ListSubjectPageModule {}
