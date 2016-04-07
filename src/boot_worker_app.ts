import 'es6-shim';
import 'es6-promise';
import 'reflect-metadata';
import 'zone.js/dist/zone-microtask';
import 'zone.js/dist/long-stack-trace-zone';
import {Http, HTTP_PROVIDERS, Jsonp, JSONP_PROVIDERS} from 'angular2/http';

import { platform, provide, ApplicationRef, ComponentRef, Injector } from 'angular2/core';
import {
  WORKER_APP_PLATFORM,
  WORKER_APP_APPLICATION,
  WORKER_APP_ROUTER
} from 'angular2/platform/worker_app';
import { APP_BASE_HREF, Router } from 'angular2/router';
import { App } from './app/app';

platform(WORKER_APP_PLATFORM).asyncApplication(() => Promise.resolve([
  WORKER_APP_APPLICATION,
  WORKER_APP_ROUTER,
  JSONP_PROVIDERS,
  Jsonp,
  HTTP_PROVIDERS,
  provide(APP_BASE_HREF, { useValue: '/' }),
]))
  .then((appRef: ApplicationRef) => {
    return appRef.bootstrap(App, [HTTP_PROVIDERS, JSONP_PROVIDERS, Jsonp]);
  })
  .then((compRef: ComponentRef) => {
    const injector: Injector = compRef.injector;
    const router: Router = injector.get(Router);

    return (<any>router)._currentNavigation;
  })
  .then(() => {
    setTimeout(() => {
      postMessage('APP_READY', undefined);
    });
  })
.then(() => {
  setTimeout(() => {
    postMessage('APP_READY', undefined);
  });
});
