import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import * as $ from 'jquery';
/**
 * Generated class for the CallbackPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-callback',
  templateUrl: 'callback.html',
})
export class CallbackPage implements AfterViewInit {
 
  ngAfterViewInit(){
   window.alert("ngAfterViewInIt code works!");

  
  // do ajax
  //   do ajax success 
  
  //     var code = function getParameterByName(code, url) {
  //       if (!url) url = window.location.href;
  //       code = code.replace(/[\[\]]/g, "\\$&");
  //       var regex = new RegExp("[?&]" + code + "(=([^&#]*)|&|#|$)"),
  //           results = regex.exec(url);
  //       if (!results) return null;
  //       if (!results[2]) return '';
  //       return decodeURIComponent(results[2].replace(/\+/g, " "));
  //       }
  
  //     $.ajax(
  //     {
  //     method:"POST",
  //     url: "http:/accounts.spotify.com/api/token",
  //     data:{
  //       "grant_type": "authorization_code",
  //       "code":         code,//given in url after login and redirect
  //       "redirect_uri": "http://localhost:8100/callback",
  //       "client_secret":'2e07d8bab06c4da9beba81a7f5addfe6',
  //       "client_id":    '64f2608e81b54dd6b67e8340e8b548b9',
  //     },
  //     success: function(result){
  //       //handle
  //       alert(result);
  //     },
  //   }
  // );

  }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CallbackPage'); 
  }
 
}
