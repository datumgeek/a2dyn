import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

// define the exported modules from this application
var exportedModules = {
  "@angular/core": require('bundle?lazy!@angular/core'),
  "@angular/forms": require('bundle?lazy!@angular/forms'),
  "@angular/platform-browser": require('bundle?lazy!@angular/platform-browser'),
  "@angular/http": require('bundle?lazy!@angular/http')
};

// externally "define" (in the requirejs / dojo sense) the modules that are exported
(<any>window).plotter.start = () => {
  for(let key in exportedModules) {
    (<any>window).plotter.define(key, [], exportedModules[key]);
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);
