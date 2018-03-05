import { Component, DoCheck } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements DoCheck{

  ngDoCheck(){
    
     
     
    // userProfileTemplate = Handlebars.compile(userProfileSource),
    // userProfilePlaceholder = document.getElementById('user-profile');
   

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
          alert(JSON.stringify(result));
          // var MyJSON = JSON.stringify(result);
          //document.getElementById('h3').innerHTML = "Logged in as " + result.display_name;
          //$('#user-profile').show();
          $("#name").html("Name: "+result.display_name);
          $("#id").html("ID: "+result.id);
          $("#email").html("Email: "+result.email);
          $("#country").html("Country: "+result.country);
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
  

