import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-slider-array-component',
  templateUrl: './slider-array-component.component.html',
  styleUrls: ['./slider-array-component.component.scss'],
})
export class SliderArrayComponentComponent implements OnInit {

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
