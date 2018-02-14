import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ArticleComponent } from '../article/article.component';
import { OnInit, Input, ViewChild } from '@angular/core';
import { Article } from '../article/article.model';
import { Platform, Nav } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HomePage } from '../home/home';


//@IonicPage({
 // name: 'about'
//})

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage{

  
  @Input()article:Article;
  // @ViewChild(Nav) navCtrl: Nav;
  rootPage:any = HomePage;
  articles:Article[];

  constructor(public navCtrl: NavController) {
  }
  
}
