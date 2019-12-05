import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slider-array',
  templateUrl: './slider-array.page.html',
  styleUrls: ['./slider-array.page.scss'],
})
export class SliderArrayPage implements OnInit {

  @Input() id: string;
  item: any;
  isLoaded = false;
  arr = ['./assets/images/11.jpg', './assets/images/12.jpg', './assets/images/13.jpg'];

  slideOpts = {
    initialSlide: 1,
  };

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    console.log(this.id);
    this.isLoaded = true;
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
