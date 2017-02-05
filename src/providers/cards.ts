import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CardsService {

  constructor(public http: Http) {}

  load(params) {
    var url = 'https://pacific-headland-82960.herokuapp.com/angular/1.6.2';
    if(params.key) {
      url += '?key=' + params.key;
    }

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
