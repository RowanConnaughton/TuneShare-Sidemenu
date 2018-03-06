import { Component } from '@angular/core';
import { /*IonicPage,*/ NavController } from 'ionic-angular';
import * as $ from 'jquery';


//@IonicPage({
  //name: 'favourites',
  //segment: 'favourites'
//})

@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html'
})
export class FavoritesPage {

  constructor(public navCtrl: NavController) {
  }
  
  ngOnInit(){

    var access_token = sessionStorage.getItem('access_token');


    $.ajax(
      {
        method: "GET",
        url:"https://api.spotify.com/v1/me/playlists",
        headers: {
          'Authorization': 'Bearer ' + access_token,
          'Content-Type' : 'application/json'
        },
      
        success: function (result) {

          //handle
          alert(JSON.stringify(result));
          console.log(result);


          var uri1 = result.items[0].uri;
          var uri2 = result.items[1].uri;
          var uri3 = result.items[2].uri;
          

          $("#p1").attr("src", "https://open.spotify.com/embed?uri=" + uri1);
          $("#p2").attr("src", "https://open.spotify.com/embed?uri=" + uri2);
          $("#p3").attr("src", "https://open.spotify.com/embed?uri=" + uri3);


       
        },
        error: function (result) {
          alert("spotify fail");
          alert(JSON.stringify(result));

        }
      });

  }

  
}
