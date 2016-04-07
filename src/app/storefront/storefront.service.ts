import { Injectable } from 'angular2/core';
import { Jsonp, Http, JSONP_PROVIDERS } from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class StorefrontService {
  static API_KEY: string = 'zzqv563kgzqjt4m29b6atgg3';

  constructor(public jsonp: Jsonp, public http:Http) {}

  getProducts() {
    let url = `https://api.bestbuy.com/v1/products((search=game)&bestSellingRank>11&(categoryPath.id=pcmcat300300050002))?apiKey=${StorefrontService.API_KEY}&callback=JSONP_CALLBACK&format=json`
    return this.jsonp.get(url)
      .map((response) => response.json().products);
  }
}
