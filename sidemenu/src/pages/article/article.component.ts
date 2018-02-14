import { Component, Input, ViewChild } from '@angular/core';
import {Article} from './article.model';
import { Nav } from 'ionic-angular';
import { HomePage } from '../home/home';
// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  // styleUrls:['./style.css'],
  host:{
    class: 'row'
  }
 
})

export class ArticleComponent {
  @Input()article:Article;
  @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = HomePage;
  articles:Article[];
//platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen
  constructor() {
    this.articles = [
      new Article('Hello World', 'http://angular.io', 5)
    ]
    // platform.ready().then(() => {
    
    //   // Okay, so the platform is ready and our plugins are available.
    //   // Here you can do any higher level native things you might need.
    //   statusBar.styleDefault();
    //   splashScreen.hide();
    // });
  
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title:${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles():Article[]{
    return this.articles.sort((a:Article, b:Article) => b.votes - a.votes)
  }

  voteUp() : boolean{
 this.article.voteUp();
 return false;

  }

  voteDown() : boolean{
  this.article.voteDown();
  return false;

  }

 
}
