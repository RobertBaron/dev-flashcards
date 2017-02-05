import { Component, ElementRef, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController, NavParams } from 'ionic-angular';
import { CardsService } from '../../providers/cards';


declare var hljs: any;
/*
  Generated class for the Cards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html',
  providers: [CardsService]
})
export class CardsPage {
  @ViewChild(Content) content: Content;

  card:any = null;
  framework = null;
  version =  null;

  constructor(public navCtrl: NavController, public cardsService: CardsService, public navParams: NavParams) {
    this.framework = navParams.get("framework");
    this.version = navParams.get("version");

    this.loadCard();
  }

  loadCard(){
    var cardKey = this.card && this.card.key || null;
    this.cardsService.load({
      key: cardKey
    })
    .then(data => {
      this.card = data;

      if(this.card.sample) {
        setTimeout(function() {
          var block = document.getElementsByTagName("code");
          hljs.highlightBlock(block[0], {languages: ['javascript', 'html', 'css']});
        }, 500);
      }

      this.content.scrollToTop();
    });
  }

  next(){
    this.loadCard();
  }
}
