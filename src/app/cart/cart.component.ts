import { Component } from 'angular2/core';

//Forced to use require because TS errors the import syntax.
const cartTemplate = require('./cart.html');

@Component({
  selector: 'cart',
  template: cartTemplate
})
export class Cart {}
