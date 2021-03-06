var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require("angular2/angular2");
var angular2_2 = require("angular2/angular2");
var header_1 = require("./components/header/header");
var container_1 = require("./components/container/container");
var GdgApp = (function () {
    function GdgApp() {
        this.siteName = "GDG Aracaju";
    }
    GdgApp = __decorate([
        angular2_2.Component({
            selector: "gdg-app"
        }),
        angular2_2.View({
            templateUrl: "./app/app.html",
            directives: [header_1.GdgHeader, container_1.GdgContainer]
        }), 
        __metadata('design:paramtypes', [])
    ], GdgApp);
    return GdgApp;
})();
angular2_1.bootstrap(GdgApp);
