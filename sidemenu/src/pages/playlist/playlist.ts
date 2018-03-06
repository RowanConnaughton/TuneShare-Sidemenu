import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html'
})
export class PlaylistPage {
  playlistName: string;

  constructor(public navCtrl: NavController) {
  }
  Create() {
    
    var access_token = sessionStorage.getItem('access_token');
    var PlaylistName = this.playlistName;
    var user_id = sessionStorage.getItem('user_id');
    

    $.ajax(
      {
        method: "GET",
        // url: "https://api.spotify.com/v1/users/"+user_id+"/playlists",
        // url: "https://api.spotify.com/v1/browse/featured-playlists",
        url:"https://api.spotify.com/v1/browse/featured-playlists",
        headers: {
          'Authorization': 'Bearer ' + access_token,
          // 'Content-Type' : 'application/json'
        },
        // data:{
        //   name: PlaylistName
        // },
        success: function (result) {
          //handle
          alert(JSON.stringify(result));
          console.log(result);
          var uri1 = result.playlists.items[0].uri;
          var uri2 = result.playlists.items[1].uri;
          var uri3 = result.playlists.items[2].uri;


          $("#p1").attr("src", "https://open.spotify.com/embed?uri=" + uri1);
          $("#p2").attr("src", "https://open.spotify.com/embed?uri=" + uri2);
          $("#p3").attr("src", "https://open.spotify.com/embed?uri=" + uri3);


          $("#playlists").html("Name: "+result.playlists);
          // console.log(result.tracks.items[0].uri);
        },
        error: function (result) {
          alert("spotify fail");
          alert(JSON.stringify(result));

        }
      });
  }
}
