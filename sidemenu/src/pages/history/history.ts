import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  song: string;
  constructor(public navCtrl: NavController) {
  }


/* fav(){
  var x = document.getElementById("myFrame");
  
   
    document.getElementById("test").appendChild(x);
} */
  addTrack(){
    var access_token = sessionStorage.getItem('access_token');
    var playlistId = sessionStorage.getItem('playlistId');
    var user_id = sessionStorage.getItem('user_id');
    var trackUri = sessionStorage.getItem('track1');
    console.log(playlistId);
    console.log(user_id);
    console.log(trackUri);
    $.ajax(
      {
        method: "POST",
        url: "https://api.spotify.com/v1/users/"+user_id+"/playlists/"+playlistId+"/tracks?uris="+trackUri,
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        contentType: 'application/json',
        success: function (result) {
          //handle
          alert(JSON.stringify(result));
          
        },
        error: function (result) {
          alert("spotify fail");
          alert(JSON.stringify(result));

        }
      });
    }

  mySearch() {
    // console.log( "Test::song: " + this.song);
    var access_token = sessionStorage.getItem('access_token');
    var song = this.song;

    $.ajax(
      {
        method: "GET",
        url: "https://api.spotify.com/v1/search?q=" + song + "&type=track",
        headers: {
          'Authorization': 'Bearer ' + access_token
        },
        success: function (result) {
          //handle
          //alert(JSON.stringify(result));
          var uri1 = result.tracks.items[0].uri;
          sessionStorage.setItem('track1', uri1);
          var uri2 = result.tracks.items[1].uri;
          sessionStorage.setItem('track2', uri2);
          var uri3 = result.tracks.items[2].uri;
          sessionStorage.setItem('track3', uri3);
          var uri4 = result.tracks.items[3].uri;
          sessionStorage.setItem('track4', uri4);

          // console.log(result.tracks.items[0].uri);
          $("#track1").attr("src", "https://open.spotify.com/embed?uri=" + uri1);
          $("#track2").attr("src", "https://open.spotify.com/embed?uri=" + uri2);
          $("#track3").attr("src", "https://open.spotify.com/embed?uri=" + uri3);
          $("#track4").attr("src", "https://open.spotify.com/embed?uri=" + uri4);
        },
        error: function (result) {
          alert("spotify fail");
          alert(JSON.stringify(result));

        }
      });
  }



  // initializeItems() {
  //   this.items = [
  //     'Arcade Fire',
  //     'A$AP Ferg',
  //     'Bruno Mars',
  //     'Childish Gambino',
  //     'Cage the Elephant',
  //     'Drake',
  //     'DJ Khaled',
  //     'Ed Sheeran',
  //     'Eminem',
  //     'Elvis Presley',
  //     'Future',
  //     'Florence + the Machine',
  //     'Gorillaz',
  //     'George Michael',
  //     'Halsey',
  //     'J.Cole',
  //     'Jay-Z',
  //     'Kendrick Lamar',
  //     'King of Leon',
  //     'Linkin Park',
  //     'Metallica',
  //     'Major Lazer',
  //     'Post Malone',
  //     'PartyNextDoor',
  //     'Queens of the Stone Age',
  //     'Rihanna',
  //     'Red Hot Chili Peppers',
  //     'The Rolling Stones',
  //     'Tom Petty ',
  //     'Travis Scott',
  //     'The Beatles',
  //     'The Weeknd',
  //     'Weezer',
  //     'Wham!',
  //     'Wu-Tang',
  //     'The xx',
  //     'Young Thug'
  //   ];
  //}
  // getItems(ev: { target: { value: any; }; }) {
  //   // Reset items back to all of the items
  //   this.initializeItems();

  //   // set val to the value of the ev target
  //   var val = ev.target.value;

  //   // if the value is an empty string don't filter the items
  //   if (val && val.trim() != '') {
  //     this.items = this.items.filter((item) => {
  //       return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
  //     })
  //   }
  // }
}