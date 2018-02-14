import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FavoritesPage } from '../pages/favorites/favorites';
import { PlaylistPage } from '../pages/playlist/playlist';
import { HistoryPage } from '../pages/history/history';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ArticleComponent } from '../pages/article/article.component';
// import { show-article} from '../pages/show-article/show-article';
import { CallbackPage } from '../pages/callback/callback';
import { ShowArticleComponent } from '../pages/show-article/show-article';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FavoritesPage,
    PlaylistPage,
    HistoryPage,
    AboutPage,
    ContactPage,
    ArticleComponent,
    ShowArticleComponent
    // CallbackPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    // FormsModule,
    // ReactiveFormsModule,
    
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
    ArticleComponent,
    ArticleComponent
    // CallbackPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ]
})
export class AppModule {}