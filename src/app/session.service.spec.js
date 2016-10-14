/* tslint:disable:no-unused-variable */
define(["require", "exports", '@angular/core/testing', './session.service'], function (require, exports, testing_1, session_service_1) {
    "use strict";
    describe('Service: Session', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                providers: [session_service_1.SessionService]
            });
        });
        it('should ...', testing_1.inject([session_service_1.SessionService], function (service) {
            expect(service).toBeTruthy();
        }));
    });
});
//# sourceMappingURL=session.service.spec.js.map