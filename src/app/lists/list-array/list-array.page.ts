import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SliderArrayComponentComponent } from 'src/app/sliders/slider-array-component/slider-array-component.component';
import { SliderArrayPage } from 'src/app/sliders/slider-array/slider-array.page';

@Component({
  selector: 'app-list-array',
  templateUrl: './list-array.page.html',
  styleUrls: ['./list-array.page.scss'],
})
export class ListArrayPage implements OnInit {

  arrList = ['1', '2', '3'];

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openModal(id) {
    const modal = await this.modalController.create({
      component: SliderArrayPage,
      componentProps: {
        id
      }
    });
    return await modal.present();
  }

  async openModalComponent(id) {
    const modal = await this.modalController.create({
      component: SliderArrayComponentComponent,
      componentProps: {
        id
      }
    });
    return await modal.present();
  }

}
