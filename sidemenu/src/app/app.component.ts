import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FavoritesPage } from '../pages/favorites/favorites';
import { PlaylistPage } from '../pages/playlist/playlist';
import { HistoryPage } from '../pages/history/history';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';

import { HomePage } from '../pages/home/home';
import { ArticleComponent } from '../pages/article/article.component';
// import { Article } from '../pages/article/article.model';
// import { CallbackPage } from '../pages/callback/callback';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = HomePage;
    // articles:Article[];


  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    // this.articles = [
    //   new Article('Angular 2', 'http://angular.io',3)
    // ]
    platform.ready().then(() => {
    
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
  //   console.log(`Adding article title:${title.value} and link: ${link.value}`);
  //   this.articles.push(new Article(title.value, link.value, 0));
  //   title.value = '';
  //   link.value = '';
  //   return false;
  // }

  // sortedArticles():Article[]{
  //   return this.articles.sort((a:Article, b:Article) => b.votes - a.votes)
  // }

  goToHome(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HomePage);
  }goToFavorites(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FavoritesPage);
  }goToPlaylist(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PlaylistPage);
  }goToHistory(params){
    if (!params) params = {};
    this.navCtrl.setRoot(HistoryPage);
  }goToAbout(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AboutPage);
  }goToContact(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ContactPage);
  }
  goToArticle(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ArticleComponent);
  }
  // }goToCallback(params){
  //   if (!params) params = {};
  //   this.navCtrl.setRoot(CallbackPage);
  // }
  
}
