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
    var SessionService = (function () {
        function SessionService() {
            this.session = {
                views: [
                    {
                        module: 'views/customer/customer.module',
                        view: 'CustomerListComponent',
                        model: {
                            title: 'customer list',
                            message: 'this is very, very cool :)'
                        }
                    },
                    {
                        module: 'views/customer/customer.module',
                        view: 'CustomerDetailComponent',
                        model: {
                            title: 'customer detail',
                            customerId: 1
                        }
                    },
                    {
                        module: 'views/customer/customer.module',
                        view: 'CustomerListComponent',
                        model: {
                            title: 'customer list',
                            message: 'another one, but with a different message !! :)'
                        }
                    }
                ]
            };
        }
        SessionService = __decorate([
            core_1.Injectable(), 
            __metadata('design:paramtypes', [])
        ], SessionService);
        return SessionService;
    }());
    exports.SessionService = SessionService;
});
//# sourceMappingURL=session.service.js.map