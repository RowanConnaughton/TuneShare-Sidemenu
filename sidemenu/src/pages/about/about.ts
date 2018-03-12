import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Input } from '@angular/core';
import { Article } from '../article/article.model';


import { HomePage } from '../home/home';




@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {


  @Input() article: Article;
  // @ViewChild(Nav) navCtrl: Nav;
  rootPage: any = HomePage;
  articles: Article[];

  constructor(public navCtrl: NavController) {
  }

}
