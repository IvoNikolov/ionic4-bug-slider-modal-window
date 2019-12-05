import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsModel } from 'src/app/model/details.model';
import { ImageService } from 'src/app/services/image/image.service';

@Component({
  selector: 'app-slider-object-component',
  templateUrl: './slider-object-component.component.html',
  styleUrls: ['./slider-object-component.component.scss'],
})
export class SliderObjectComponentComponent implements OnInit {


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
