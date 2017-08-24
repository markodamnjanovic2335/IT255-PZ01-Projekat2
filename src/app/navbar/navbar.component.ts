iimport { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component ({
    selector: "navbar",
    templateUrl: "./navbar.html"
})
export class NavbarComponent  {
router: Router;
isAuth: String;
isAuth2: String;

constructor(router: Router) {
this.router = router;
router.events.subscribe((val) => {

if(localStorage.getItem('token2') !== null){
this.isAuth2 = 'yes';
}
if(localStorage.getItem('token2') == null){
this.isAuth2 = 'no';
}
if(localStorage.getItem('token') !== null){
this.isAuth = 'yes';
}
 if(localStorage.getItem('token') == null){
this.isAuth = 'no';
 }
    });
}

onLogout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('token2');
    this.router.navigate(['./']);

    if (localStorage.getItem('token') !== null) {
        this.isAuth = 'yes';
    }if (localStorage.getItem('token') == null) {
        this.isAuth = 'no';
    }if (localStorage.getItem('token2') !== null) {
        this.isAuth2 = 'yes';
    }if (localStorage.getItem('token2') == null) {
        this.isAuth2 = 'no';
    }
}
}
