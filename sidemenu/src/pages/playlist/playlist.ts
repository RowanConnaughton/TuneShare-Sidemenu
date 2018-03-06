import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html'
})
export class PlaylistPage implements OnInit{
  playlistName: string;
  
  ngOnInit(){
    var access_token = sessionStorage.getItem('access_token');
    $.ajax(
      {
        method: "GET",
        // url: "https://api.spotify.com/v1/users/"+user_id+"/playlists",
        // url: "https://api.spotify.com/v1/browse/featured-playlists",
        url:"https://api.spotify.com/v1/browse/featured-playlists",
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        success: function (result) {
          //handle
          alert(JSON.stringify(result));
          var uri1 = result.playlists.items[0].uri;
          var uri2 = result.playlists.items[1].uri;
          var uri3 = result.playlists.items[2].uri;
          
          // console.log(result.tracks.items[0].uri);
          $("#p1").attr("src", "https://open.spotify.com/embed?uri=" + uri1);
          $("#p2").attr("src", "https://open.spotify.com/embed?uri=" + uri2);
          $("#p3").attr("src", "https://open.spotify.com/embed?uri=" + uri3);
         
        
          // console.log(result.tracks.items[0].uri);
        },
        error: function (result) {
          alert("spotify fail");
          alert(JSON.stringify(result));

        }
      });
  }
  constructor(public navCtrl: NavController) {
  }

 
  Create() {
    
    var access_token = sessionStorage.getItem('access_token');
    var name = this.playlistName;
    var user_id = sessionStorage.getItem('user_id');
 
    $.ajax(
      {
        method: "POST",
        url:"https://api.spotify.com/v1/users/"+user_id+"/playlists",
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        contentType: 'application/json',
        data:JSON.stringify({
          "name": name
        }),
        success: function (result) {
          //handle
          alert("playlist created");
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
