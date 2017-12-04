import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  items;

  constructor(public navCtrl: NavController) {
    this.initializeItems();
  }
  
  initializeItems() {
    this.items = [
      'Arcade Fire',
      'A$AP Ferg',
      'Bruno Mars',
      'Childish Gambino',
      'Cage the Elephant',
      'Drake',
      'DJ Khaled',
      'Ed Sheeran',
      'Eminem',
      'Elvis Presley',
      'Future',
      'Florence + the Machine',
      'Gorillaz',
      'George Michael',
      'Halsey',
      'J.Cole',
      'Jay-Z',
      'Kendrick Lamar',
      'King of Leon',
      'Linkin Park',
      'Metallica',
      'Major Lazer',
      'Post Malone',
      'PartyNextDoor',
      'Queens of the Stone Age',
      'Rihanna',
      'Red Hot Chili Peppers',
      'The Rolling Stones',
      'Tom Petty ',
      'Travis Scott',
      'The Beatles',
      'The Weeknd',
      'Weezer',
      'Wham!',
      'Wu-Tang',
      'The xx',
      'Young Thug'
    ];
  }
  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}