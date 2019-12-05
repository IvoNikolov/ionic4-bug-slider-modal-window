import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageService } from 'src/app/services/image/image.service';
import { DetailsModel } from 'src/app/model/details.model';

@Component({
  selector: 'app-slider-object',
  templateUrl: './slider-object.page.html',
  styleUrls: ['./slider-object.page.scss'],
})
export class SliderObjectPage implements OnInit {

  @Input() id: string;
  isLoaded = false;
  item: DetailsModel;

  slideOpts = {
    initialSlide: 1,
  };

  constructor(private modalController: ModalController, private imgService: ImageService) { }

  ngOnInit() {
    this.imgService.getItem(this.id).subscribe((data) => {
      this.item = data;
      this.isLoaded = true;
      });
  }

  dismiss() {
    this.modalController.dismiss();
  }

}
