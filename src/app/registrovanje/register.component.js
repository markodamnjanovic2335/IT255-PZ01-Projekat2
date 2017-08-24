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
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var router_1 = require("@angular/router");
var http_2 = require("@angular/http");
var RegisterComponent = (function () {
    function RegisterComponent(http, router) {
        this.registerForm = new forms_1.FormGroup({
            username: new forms_1.FormControl(),
            password: new forms_1.FormControl(),
            firstName: new forms_1.FormControl(),
            lastName: new forms_1.FormControl(),
            adresa: new forms_1.FormControl(),
            ulica: new forms_1.FormControl(),
            telefon: new forms_1.FormControl()
        });
        this.http = http;
        this.router = router;
        if (localStorage.getItem('token') != null) {
            this.router.navigate(['./']);
        }
    }
    RegisterComponent.prototype.onRegister = function () {
        var _this = this;
        var data = "username=" + this.registerForm.value.username + "&password=" + this.registerForm.value.password
                      + "&firstName=" + this.registerForm.value.firstName + "&lastName=" + this.registerForm.value.lastName
                      + "&adresa=" + this.registerForm.value.adresa + "&ulica=" + this.registerForm.value.ulica
                      + "&telefon=" + this.registerForm.value.telefon;

        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/phpKnjige/registerservice.php', this.data, { headers: headers })
            .map(function (res) { return res; })
            .subscribe(function (data) { return _this.postResponse; }, function (err) {
            var obj = JSON.parse(err._body);
            document.getElementsByClassName('alert')[0].innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\'').join('');
        }, function () {
            var obj = JSON.parse(JSON.stringify(_this.data));
            localStorage.setItem('token', obj.token);
            _this.router.navigate(['./']);
        });
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    core_1.Component({
        selector: 'register',
        templateUrl: './register.html'
    }),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], RegisterComponent);
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map
