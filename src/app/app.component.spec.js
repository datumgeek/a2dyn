/* tslint:disable:no-unused-variable */
define(["require", "exports", '@angular/core/testing', './app.component'], function (require, exports, testing_1, app_component_1) {
    "use strict";
    describe('App: A2dyn', function () {
        beforeEach(function () {
            testing_1.TestBed.configureTestingModule({
                declarations: [
                    app_component_1.AppComponent
                ],
            });
        });
        it('should create the app', testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            var app = fixture.debugElement.componentInstance;
            expect(app).toBeTruthy();
        }));
        it("should have as title 'app works!'", testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            var app = fixture.debugElement.componentInstance;
            expect(app.title).toEqual('app works!');
        }));
        it('should render title in a h1 tag', testing_1.async(function () {
            var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
            fixture.detectChanges();
            var compiled = fixture.debugElement.nativeElement;
            expect(compiled.querySelector('h1').textContent).toContain('app works!');
        }));
    });
});
//# sourceMappingURL=app.component.spec.js.map