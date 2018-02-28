import { Component, DoCheck } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AlertController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements DoCheck{

  ngDoCheck(){
   

  

if( window.location.hash ) {
     var access_token = window.location.hash.split("=")[1].split("&")[0];
      $.ajax(
      {
        method:"GET",
        url: "https://api.spotify.com/v1/search?q=roadhouse%20blues&type=track",
        headers: {  
           'Authorization': 'Bearer '+ access_token
        },
        success: function(result){
          //handle
          alert(JSON.stringify(result));
        },
        error: function(result){
          alert("spotify fail");
          alert(JSON.stringify(result));
        }
      });
  }
}
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
  

