define(["require", "exports", './polyfills.ts', 'zone.js/dist/long-stack-trace-zone', 'zone.js/dist/proxy.js', 'zone.js/dist/sync-test', 'zone.js/dist/jasmine-patch', 'zone.js/dist/async-test', 'zone.js/dist/fake-async-test'], function (require, exports) {
    "use strict";
    // Prevent Karma from running prematurely.
    __karma__.loaded = function () { };
    Promise.all([
        System.import('@angular/core/testing'),
        System.import('@angular/platform-browser-dynamic/testing')
    ])
        .then(function (_a) {
        var testing = _a[0], testingBrowser = _a[1];
        testing.getTestBed().initTestEnvironment(testingBrowser.BrowserDynamicTestingModule, testingBrowser.platformBrowserDynamicTesting());
    })
        .then(function () { return require.context('./', true, /\.spec\.ts/); })
        .then(function (context) { return context.keys().map(context); })
        .then(__karma__.start, __karma__.error);
});
//# sourceMappingURL=test.js.map