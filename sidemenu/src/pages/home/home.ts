import { Component, DoCheck } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';
//import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements DoCheck{

  ngDoCheck(){
    
    
     

   

if( window.location.hash ) {
     var access_token = window.location.hash.split("=")[1].split("&")[0];

    // Save data to sessionStorage
     sessionStorage.setItem('access_token', access_token);

      $.ajax(
      {
        method:"GET",
        url: "https://api.spotify.com/v1/me",
        headers: {  
           'Authorization': 'Bearer '+ access_token
        },
        success: function(result){
          //handle
          // alert(JSON.stringify(result));
        $("#logIn").hide();
        $('#card').show();

          $("#name").html("Name: "+result.display_name);
          $("#id").html("ID: "+result.id);
          $("#email").html("Email: "+result.email);
          $("#country").html("Country: "+result.country);
          $("#img").attr("src", result.images[0].url);
          var ID = result.id;
          sessionStorage.setItem('user_id', ID);
        },
        error: function(result){
          alert("spotify fail");
          alert(JSON.stringify(result));
          $('#user-profile').hide();
        }
    });
   
  }
  // Save data to sessionStorage


// // Get saved data from sessionStorage
// var data = sessionStorage.getItem('key');

// // Remove saved data from sessionStorage
// sessionStorage.removeItem('key');

// // Remove all saved data from sessionStorage
// sessionStorage.clear();
  
 }
constructor(public navCtrl: NavController) {

  }

}
  

