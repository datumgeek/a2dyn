define(["require", "exports", '@angular/platform-browser-dynamic', '@angular/core', './environments/environment', './app/app.module', './polyfills.ts'], function (require, exports, platform_browser_dynamic_1, core_1, environment_1, app_module_1) {
    "use strict";
    if (environment_1.environment.production) {
        core_1.enableProdMode();
    }
    // define the exported modules from this application
    var exportedModules = {
        "@angular/core": require('bundle?lazy!@angular/core'),
        "@angular/forms": require('bundle?lazy!@angular/forms'),
        "@angular/platform-browser": require('bundle?lazy!@angular/platform-browser'),
        "@angular/http": require('bundle?lazy!@angular/http')
    };
    // externally "define" (in the requirejs / dojo sense) the modules that are exported
    window.plotter.start = function () {
        for (var key in exportedModules) {
            window.plotter.define(key, [], exportedModules[key]);
        }
    };
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
});
//# sourceMappingURL=main.js.map