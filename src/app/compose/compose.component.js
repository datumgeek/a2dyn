var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core'], function (require, exports, core_1) {
    "use strict";
    var ComposeComponent = (function () {
        function ComposeComponent(compiler, componentFactorResolver) {
            this.compiler = compiler;
            this.componentFactorResolver = componentFactorResolver;
            this.isViewInitialized = false;
        }
        ComposeComponent.prototype.loadSubcomponent = function () {
            var _this = this;
            if (!this.isViewInitialized) {
                return;
            }
            if (this.comp) {
                this.comp.destroy();
            }
            window.require([this.modulePath], function (module) {
                var type = module["default"];
                _this.compiler.compileModuleAndAllComponentsAsync(type)
                    .then(function (moduleWithFactories) {
                    var factory = moduleWithFactories
                        .componentFactories
                        .find(function (x) { return x.componentType.name === _this.className; });
                    _this.comp = _this.placeholderRef.createComponent(factory, 0);
                    if (_this.dynState) {
                        if (typeof _this.comp.instance.setDynState == 'function') {
                            _this.comp.instance.setDynState(_this.dynState);
                        }
                    }
                });
            });
        };
        ComposeComponent.prototype.ngOnInit = function () {
        };
        ComposeComponent.prototype.ngOnChanges = function () {
            this.loadSubcomponent();
        };
        ComposeComponent.prototype.ngAfterViewInit = function () {
            this.isViewInitialized = true;
            this.loadSubcomponent();
        };
        ComposeComponent.prototype.ngOnDestroy = function () {
            if (this.comp) {
                this.comp.destroy();
            }
        };
        __decorate([
            core_1.Input(), 
            __metadata('design:type', String)
        ], ComposeComponent.prototype, "modulePath", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', String)
        ], ComposeComponent.prototype, "className", void 0);
        __decorate([
            core_1.Input(), 
            __metadata('design:type', String)
        ], ComposeComponent.prototype, "dynState", void 0);
        __decorate([
            core_1.ViewChild("placeholder", { read: core_1.ViewContainerRef }), 
            __metadata('design:type', core_1.ViewContainerRef)
        ], ComposeComponent.prototype, "placeholderRef", void 0);
        ComposeComponent = __decorate([
            core_1.Component({
                selector: 'app-compose',
                templateUrl: './compose.component.html',
                styleUrls: ['./compose.component.css']
            }), 
            __metadata('design:paramtypes', [core_1.Compiler, core_1.ComponentFactoryResolver])
        ], ComposeComponent);
        return ComposeComponent;
    }());
    exports.ComposeComponent = ComposeComponent;
});
//# sourceMappingURL=compose.component.js.map