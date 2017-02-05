import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class FrameworksService {

  constructor(public http: Http) {}

  load() {
    var url = 'https://pacific-headland-82960.herokuapp.com/framework';

    return new Promise(resolve => {
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        });
    });
  }
}
