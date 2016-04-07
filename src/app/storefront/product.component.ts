import { Component, Input, Output } from 'angular2/core';

@Component({
  selector: 'product',
  template: `
    <div class='product'>
      {{product.sku}}
      {{product.name}}
    </div>
  `
})
export class ProductComponent {
  @Input() product;
}
