import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-playlist',
  templateUrl: 'playlist.html'
})
export class PlaylistPage implements OnInit{
  playlistName: string;
  

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController){ }

        presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Low battery',
            subTitle: '10% of battery remaining',
            buttons: ['Dismiss']
            });
            alert.present();
            }

  ngOnInit(){
    var access_token = sessionStorage.getItem('access_token');
    $.ajax(
      {
        method: "GET",
        url:"https://api.spotify.com/v1/browse/featured-playlists",
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        success: function (result) {
          //handle
          alert("Please Create a new playlist");
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
          alert("Please login on Homepage");
          alert(JSON.stringify(result));

        }
      });
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
         alert("Playlist Created, head over to the search page to add songs");
         //alert(JSON.stringify(result));
         sessionStorage.setItem('playlistId', result.id);
          var uriNew = result.uri;
           $("#playlistFrames").append("<iframe id='p4' src='https://open.spotify.com/embed?uri="+uriNew+"' width='300' height='380' frameborder='0' allowtransparency='true'></iframe>");
          // console.log(result.tracks.items[0].uri);
        },
        error: function (result) {
          alert("Could not create Playlist");
          alert(JSON.stringify(result));

        }
      });
  }
}
