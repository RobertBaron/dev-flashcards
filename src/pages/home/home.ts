import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { CardsPage } from '../cards/cards';
import { FrameworksService } from '../../providers/frameworks';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FrameworksService]
})
export class HomePage {
  frameworks:any = [];

  constructor(public navCtrl: NavController, public frameworksService: FrameworksService,) {
    this.load();
  }

  load(){

    this.frameworksService.load()
      .then(data => {
        this.frameworks = data;
      });
  }

  navigate(framework) {
    console.log(framework);
    this.navCtrl.push(CardsPage, { framework: framework.name, version: framework.version});
  }
}
