var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '@angular/router'], function (require, exports, core_1, router_1) {
    "use strict";
    var routes = [];
    var A2dynRoutingModule = (function () {
        function A2dynRoutingModule() {
        }
        A2dynRoutingModule = __decorate([
            core_1.NgModule({
                imports: [router_1.RouterModule.forRoot(routes)],
                exports: [router_1.RouterModule],
                providers: []
            }), 
            __metadata('design:paramtypes', [])
        ], A2dynRoutingModule);
        return A2dynRoutingModule;
    }());
    exports.A2dynRoutingModule = A2dynRoutingModule;
});
//# sourceMappingURL=app-routing.module.js.map