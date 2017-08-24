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
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var router_1 = require("@angular/router");
            NarudzbineComponent = (function () {
                function NarudzbineComponent( http, router) {
                    var _this = this;
                    this.http = http;
                    this.router = router;
                    var headers = new http_1.Headers();
                    http.get('http://localhost/phpKnjige/spisakNarudzbina.php', { headers: headers })
                        .map(function (res) { return res.json(); })
                        .subscribe(function (korpa) {
                        _this.korpa = korpa.korpa;
                        setInterval(function () {
                            $('table').DataTable();
                        }, 200);
                    }, function (err) {
                        _this.router.parent.navigate(['./']);
                    });
                }
                NarudzbineComponent.prototype.remove = function (item) {
                    var _this = this;
                    console.log("Remove: ", item);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/x-www-form-urlencoded');
                    this.http.get('http://localhost/phpKnjige/obrisiNarudzbinu.php?id=' + item, { headers: headers }).subscribe(function (data) { return _this.postResponse = data; });
                    location.reload();
                };
                NarudzbineComponent = __decorate([
                    core_1.Component({
                        selector: 'narudzbine',
                        templateUrl: './narudzbine.html'
                    }),
                    __metadata('design:paramtypes', [ http_1.Http, router_1.Router])
                ], NarudzbineComponent);
                return NarudzbineComponent;
            }());
            exports_1("NarudzbineComponent", NarudzbineComponent);
        }
    }
});
//# sourceMappingURL=narudzbine.component.js.map
