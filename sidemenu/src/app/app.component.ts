import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage} from '../pages/home/home';
import { FavoritesPage } from '../pages/favorites/favorites';
import { PlaylistPage } from '../pages/playlist/playlist';
import { HistoryPage } from '../pages/history/history';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';






@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage = HomePage;


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToHome(){
    
    this.navCtrl.push('HomePage');
  }
  goToFavorites(){
    
    this.navCtrl.push('FavoritesPage');
  }
  goToPlaylist(){
    
    this.navCtrl.push('PlaylistPage');
  }
  goToHistory(){
    
    this.navCtrl.push('HistoryPage');
  }
  goToAbout(){
    
    this.navCtrl.push('AboutPage');
  }
  goToContact(){
    this.navCtrl.push('ContactPage');
  }

  /*goToContact(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContactPage);

  }*/
}
