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
  "@angular/core": require('@angular/core'),
  "@angular/forms": require('@angular/forms'),
  "@angular/platform-browser": require('@angular/platform-browser'),
  "@angular/http": require('@angular/http')
};

// externally "define" (in the requirejs / dojo sense) the modules that are exported
(<any>window).plotter.start = () => {
  for(let key in exportedModules) {
    (<any>window).plotter.define(key, [], () => {
      let fn = exportedModules[key];
      return fn;
    });
  }
}

platformBrowserDynamic().bootstrapModule(AppModule);
