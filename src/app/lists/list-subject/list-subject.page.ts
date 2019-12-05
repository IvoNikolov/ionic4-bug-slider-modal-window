import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SliderArrayPage } from 'src/app/sliders/slider-array/slider-array.page';
import { SliderArrayComponentComponent } from 'src/app/sliders/slider-array-component/slider-array-component.component';
import { ImageService } from 'src/app/services/image/image.service';
import { DetailsModel } from 'src/app/model/details.model';
import { SliderObjectComponentComponent } from 'src/app/sliders/slider-object-component/slider-object-component.component';
import { SliderObjectPage } from 'src/app/sliders/slider-object/slider-object.page';

@Component({
  selector: 'app-list-subject',
  templateUrl: './list-subject.page.html',
  styleUrls: ['./list-subject.page.scss'],
})
export class ListSubjectPage implements OnInit {

  list: DetailsModel[];

  constructor(private modalController: ModalController, private imageSrv: ImageService) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.imageSrv.list.subscribe(exhibits => {
      this.list = exhibits;
      console.log(this.list);
    });
  }

  async openModal(id) {
    const modal = await this.modalController.create({
      component: SliderObjectPage,
      componentProps: {
        id
      }
    });
    return await modal.present();
  }

  async openModalComponent(id) {
    const modal = await this.modalController.create({
      component: SliderObjectComponentComponent,
      componentProps: {
        id
      }
    });
    return await modal.present();
  }

}
