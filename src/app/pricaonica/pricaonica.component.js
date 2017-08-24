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
            PricaonicaComponent = (function () {
                function PricaonicaComponent( http, router) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    this.token = localStorage.getItem('token');
                    this.token2 = localStorage.getItem('token2');
                    this.komentarForm =  new forms_1.FormGroup({
                      komentar: new forms_1.FormControl(),
                      username: new forms_1.FormControl()
                    });
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    if (localStorage.getItem('token')) {
                        http.get('http://localhost/phpKnjige/getUserByToken.php?token=' + this.token, { headers: headers })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (username) {
                            _this.komentarForm.controls['username'].updateValue(username.username.username);
                        }, function (err) { return console.log(JSON.stringify(err)); });
                    }
                    else {
                        http.get('http://localhost/phpKnjige/getAdminByToken.php?token2=' + this.token2, { headers: headers })
                            .map(function (res) { return res.json(); })
                            .subscribe(function (username) {
                            _this.komentarForm.controls['username'].updateValue(username.username.username);
                        }, function (err) { return console.log(JSON.stringify(err)); });
                    }
                }
                PricaonicaComponent.prototype.onAddComment = function () {
                    var _this = this;
                    var data = "komentar=" + this.komentarForm.value.komentar + "&user=" + this.komentarForm.value.username;
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.post('http://localhost/phpKnjige/dodajKomentar.php', data, { headers: headers })
                        .map(function (res) { return res; })
                        .subscribe(function (data) { return _this.postResponse = data; }, function (err) { return alert(JSON.stringify(err)); }, function () {
                        if (_this.postResponse._body.indexOf("error") === -1) {
                            alert("Uspešno ste ostavili komentar");
                            _this.router.parent.navigate(['./']);
                        }
                        else {
                            alert("Dogodila se greška");
                        }
                    });
                };
                PricaonicaComponent = __decorate([
                    core_1.Component({
                        selector: 'pricaonica',
                        templateUrl: './pricaonica.html',

                    }),
                    __metadata('design:paramtypes', [ http_1.Http, router_1.Router])
                ], PricaonicaComponent);
                return PricaonicaComponent;
            }());
            exports_1("PricaonicaComponent", PricaonicaComponent);
        }
    }
});
//# sourceMappingURL=pricaonica.component.js.map
