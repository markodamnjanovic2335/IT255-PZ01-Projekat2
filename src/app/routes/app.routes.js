"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("../home/home.component");
var obiblioteci_component_1 = require("../obiblioteci/obiblioteci.component");
var dodajknjigu_component_1 = require("../dodajknjigu/dodajknjigu.component");
var knjige_component_1 = require("../knjige/knjige.component");
var pricaonica_component_1 = require("../pricaonica/pricaonica.component");
var komentari_component_1 = require("../komentari/komentari.component");
var narucivanje_component_1 = require("../narucivanje/narucivanje.component");
var narudzbine_component_1 = require("../narudzbine/narudzbine.component");
var test_component_1 = require("../test/test.component");
var register_component_1 = require("../registrovanje/register.component");
var login_component_1 = require("../logovanje/login.component");
var appRoutes = [
    { path: '', component: home_component_1.HomePageComponent },
    { path: 'obiblioteci', component: obiblioteci_component_1.ObiblioteciComponent },
    { path: 'dodajknjigu', component: dodajknjigu_component_1.DodajKnjiguComponent },
    { path: 'knjige', component: knjige_component_1.KnjigeComponent },
    { path: 'pricaonica', component: home_component_1.HomePageComponent },
    { path: 'test', component: test_component_1.TestComponent },
    { path: 'narucivanje/:knjige_ID', component: narucivanje_component_1.NarucvivanjeComponent },
    { path: 'narudzbine', component: narudzbine_component_1.NarudzbineComponent },
    { path: 'register', component: register_component_1.RegisterComponent },
    { path: 'login', component: login_component_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map
