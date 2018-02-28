import { Component, OnInit, Input } from '@angular/core';
import {Article} from '../article/article.model';
// import { Nav } from 'ionic-angular';
// import { HomePage } from '../home/home';
/**
 * Generated class for the ShowArticleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'show-article',
  templateUrl: 'show-article.html',
  host:{
    class: 'row'
  }
})
export class ShowArticleComponent implements OnInit {

  @Input()article:Article;

  

  voteUp() : boolean{
 this.article.voteUp();
 return false;

  }

  voteDown() : boolean{
  this.article.voteDown();
  return false;

  }
ngOnInit() {
}
}
