import { Component } from 'angular2/core';
import { ProductComponent } from './product.component.ts';
import { StorefrontService } from './storefront.service.ts';
import { NgFor } from 'angular2/common';


//Forced to use require because TS errors the import syntax.
const storeFrontTemplate = require('./storefront.html');

@Component({
  selector: 'storefront',
  template: storeFrontTemplate,
  directives: [NgFor, ProductComponent],
  providers: [StorefrontService]
})
export class Storefront {
  products: Observable<Array<any>>;

  constructor(public storefrontService: StorefrontService) {
    this.products = storefrontService.getProducts();
  }
}
