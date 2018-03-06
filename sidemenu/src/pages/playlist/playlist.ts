import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html'
})
export class PlaylistPage{
  playlistName: string;

  constructor(public navCtrl: NavController) {
  }

  
  Create() {
    
    var access_token = sessionStorage.getItem('access_token');
    var Name = this.playlistName;
    var user_id = sessionStorage.getItem('user_id');
  
    $.ajax(
      {
        method: "POST",
        url: "https://api.spotify.com/v1/users/"+user_id+"/playlists",
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        contentType: 'application/json',
        data:{
          "name": Name,
        },
        success: function (result) {
          //handle
          alert(JSON.stringify(result));
         
          // console.log(result.tracks.items[0].uri);
        },
        error: function (result) {
          alert("spotify fail");
          alert(JSON.stringify(result));

        }
      });
  }

}
