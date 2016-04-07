import { Component } from 'angular2/core';
import { RouteConfig, RouterOutlet } from 'angular2/router';

import { Home } from './home';
import { Workers } from './workers';
import { Storefront } from './storefront/storefront.component';
import { StorefrontService } from './storefront/storefront.service';
import { Cart } from './cart/cart.component';

@Component({
  selector: 'app',
  directives: [RouterOutlet],
  template: '<router-outlet></router-outlet>',
  providers: [StorefrontService]
})
@RouteConfig([
  { path: '/home',        name: 'Home',        component: Home,   useAsDefault: true },
  { path: '/workers',     name: 'Workers',     component: Workers },
  { path: '/storefront',  name: 'Storefront',  component: Storefront },
  { path: '/cart',        name: 'Cart',        component: Cart }
])
export class App {}
