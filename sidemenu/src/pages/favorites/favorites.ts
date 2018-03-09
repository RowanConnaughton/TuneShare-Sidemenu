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
  songNumber: number;
  constructor(public navCtrl: NavController) {
  }

  voteUp() {
    var access_token = sessionStorage.getItem('access_token');
    var songNumber = this.songNumber-1;
    var alertNumber = songNumber+1;
    var playlistId = sessionStorage.getItem('playlistId');
    var user_id = sessionStorage.getItem('user_id');

    $.ajax(
      {
        method: "PUT",
        url: "https://api.spotify.com/v1/users/" + user_id + "/playlists/" + playlistId + "/tracks",
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        contentType: 'application/json',
        data:JSON.stringify({
         "range_start" : songNumber, "insert_before" : 2 
        }),
        success: function (result) {
          //handle
          alert("Song "+alertNumber+" Voted, please wait as we move it up the playlist");
         // alert(JSON.stringify(result));

          console.log(result);

        },
        error: function (result) {
          //alert("Problem searching for Songs");
          alert(JSON.stringify(result));

        }
      });
  }

  ngOnInit() {

    var access_token = sessionStorage.getItem('access_token');


    $.ajax(
      {
        method: "GET",
        url: "https://api.spotify.com/v1/me/playlists",
        headers: {
          'Authorization': 'Bearer ' + access_token,
          'Content-Type': 'application/json'
        },

        success: function (result) {

          //handle
          //alert("Here are some your Playlists");
          console.log(result);


          var uri1 = result.items[0].uri;
          var uri2 = result.items[1].uri;
          var uri3 = result.items[2].uri;


          $("#p1").attr("src", "https://open.spotify.com/embed?uri=" + uri1);
          $("#p2").attr("src", "https://open.spotify.com/embed?uri=" + uri2);
          $("#p3").attr("src", "https://open.spotify.com/embed?uri=" + uri3);



        },
        error: function (result) {
          alert("Please login on Homepage");
          alert(JSON.stringify(result));

        }
      });

  }


}
