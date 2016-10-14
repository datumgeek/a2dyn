var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/platform-browser', '@angular/core', '@angular/forms', '@angular/http', './app.component', './session.service', './shell/shell.component', './compose/compose.component'], function (require, exports, platform_browser_1, core_1, forms_1, http_1, app_component_1, session_service_1, shell_component_1, compose_component_1) {
    "use strict";
    var AppModule = (function () {
        function AppModule() {
        }
        AppModule = __decorate([
            core_1.NgModule({
                declarations: [
                    app_component_1.AppComponent,
                    shell_component_1.ShellComponent,
                    compose_component_1.ComposeComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    forms_1.FormsModule,
                    http_1.HttpModule
                ],
                providers: [session_service_1.SessionService],
                bootstrap: [app_component_1.AppComponent]
            }), 
            __metadata('design:paramtypes', [])
        ], AppModule);
        return AppModule;
    }());
    exports.AppModule = AppModule;
});
//# sourceMappingURL=app.module.js.map