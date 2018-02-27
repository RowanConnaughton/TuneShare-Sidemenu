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
    // window.alert("ngAfterViewInIt code works!");

    // do ajax
  //   do ajax success 
  
     
  function url_query( query: string ) {
    query = query.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var expr = "[\\?&]"+query+"=([^&#]*)";
    var regex = new RegExp( expr );
    var results = regex.exec( window.location.href );
    if ( results !== null ) {
        return results[1];
    } else {
        return false;
    }
}


var code = url_query('code');
if( code ) {
     alert(code); // "yes"
 
      $.ajax(
      {
      method:"POST",
      url: "http://accounts.spotify.com/api/token",
      data:{
        "grant_type": "authorization_code",
        "code":         code,//given in url after login and redirect
        "redirect_uri": "http://localhost:8100",
        "client_secret":'2e07d8bab06c4da9beba81a7f5addfe6',
        "client_id":    '64f2608e81b54dd6b67e8340e8b548b9',
      },
      success: function(result){
        //handle
        alert(result);
      },
    }
  );
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
  

