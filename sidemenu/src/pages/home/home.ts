import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  
// alert to notify user to login using spotify
//   constructor(public alertCtrl: AlertController) {
//   }
//   showAlert() {
//     let alert = this.alertCtrl.create({
//       title: 'Please Login!',
//       subTitle: 'Please login using you Spotify Username and Pasword',
//       buttons: ['OK']
//     });
//     alert.present();
// }
}
  

