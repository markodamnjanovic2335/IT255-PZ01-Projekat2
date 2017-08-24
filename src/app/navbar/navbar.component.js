"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var NavbarComponent = (function () {
    function NavbarComponent(router) {
        var _this = this;
        this.router = router;
        router.events.subscribe(function (val) {
            if (localStorage.getItem('token2') !== null) {
                _this.isAuth2 = 'yes';
            }
            if (localStorage.getItem('token2') == null) {
                _this.isAuth2 = 'no';
            }
            if (localStorage.getItem('token') !== null) {
                _this.isAuth = 'yes';
            }
            if (localStorage.getItem('token') == null) {
                _this.isAuth = 'no';
            }
        });
    }
    NavbarComponent.prototype.onLogout = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('token2');
        this.router.navigate(['./']);
        if (localStorage.getItem('token') !== null) {
            this.isAuth = 'yes';
        }
        if (localStorage.getItem('token') == null) {
            this.isAuth = 'no';
        }
        if (localStorage.getItem('token2') !== null) {
            this.isAuth2 = 'yes';
        }
        if (localStorage.getItem('token2') == null) {
            this.isAuth2 = 'no';
        }
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Component({
        selector: "navbar",
        templateUrl: "./navbar.html"
    }),
    __metadata("design:paramtypes", [router_1.Router])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map