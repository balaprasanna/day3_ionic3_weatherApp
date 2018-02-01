import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ForecastPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-forecast',
  templateUrl: 'forecast.html',
})
export class ForecastPage {

  city:string = ''
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForecastPage');
  }

  ionViewWillEnter() {
    console.log("Will enter...")
    this.city = this.navParams.get("city");
    console.log("City =>> ",this.city)
  }

}
