import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, DeepLinkConfig } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavoritesPage } from '../pages/favorites/favorites';
import { PlaylistPage } from '../pages/playlist/playlist';
import { HistoryPage } from '../pages/history/history';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';




export const deepLinkConfig: DeepLinkConfig = {
  links: [
     {component: HomePage, name: 'HomePage' , segment: 'home'  },
    {component: AboutPage, name: 'AboutPage', segment: 'about' },
    {component: FavoritesPage, name: 'FavoritesPage', segment: 'favorites'},
    {component: PlaylistPage, name: 'PlaylistPage', segment: 'playlist'},
    {component: HistoryPage, name: 'HistoryPage', segment: 'history'},
    {component: ContactPage, name: 'ContactPage', segment: 'contact'}
  ]
};






@NgModule({
  declarations: [
    MyApp,
    HomePage,
   FavoritesPage,
    PlaylistPage,
    HistoryPage,
    AboutPage,
    ContactPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
     locationStrategy: 'path'
  }, deepLinkConfig),
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
   FavoritesPage,
    PlaylistPage,
    HistoryPage,
    AboutPage,
    ContactPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   { provide: LocationStrategy, useClass: PathLocationStrategy },
    {provide: APP_BASE_HREF, useValue : '/' }
    
  ]
})
export class AppModule {}