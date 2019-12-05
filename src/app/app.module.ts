import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SliderObjectComponentComponent } from './sliders/slider-object-component/slider-object-component.component';
import { SliderArrayComponentComponent } from './sliders/slider-array-component/slider-array-component.component';
import { SliderArrayPageModule } from './sliders/slider-array/slider-array.module';
import { SliderObjectPageModule } from './sliders/slider-object/slider-object.module';

@NgModule({
  declarations: [AppComponent, SliderObjectComponentComponent, SliderArrayComponentComponent],
  entryComponents: [SliderObjectComponentComponent, SliderArrayComponentComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, SliderArrayPageModule, SliderObjectPageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
