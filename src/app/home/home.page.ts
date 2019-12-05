import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageService } from '../services/image/image.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  constructor(private modalCtrl: ModalController, private imageSrv: ImageService, private router: Router) {}

  ngOnInit() {

  }



}
