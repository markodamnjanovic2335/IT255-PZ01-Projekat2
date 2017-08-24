import { Component, Directive } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Router } from '@angular/router';


@Component({
    selector: 'register',
    templateUrl: './register.html'
})

export class RegisterComponent {
http: Http;
  router: Router;
  registerForm: FormGroup;
  data: string;
  postResponse: string;


    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;

        if (localStorage.getItem('token') != null) {
            this.router.navigate(['./']);
        }
        this.registerForm = new FormGroup({
            username: new FormControl(),
            password: new FormControl(),
            firstName: new FormControl(),
            lastName: new FormControl(),
            adresa: new FormControl(),
            ulica: new FormControl(),
            telefon: new FormControl()
        });
    }

    onRegister(): void {
    var data =
"username="+this.registerForm.value.username+"&password="+this.registerForm.value.password
+"&firstName="+this.registerForm.value.firstName+"&lastName="+this.registerForm.value.lastName
+"&adresa="+this.registerForm.value.adresa+"&ulica="+this.registerForm.value.ulica
+"&telefon="+this.registerForm.value.telefon;
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/phpKnjige/registerservice.php', data, {headers: headers})
        .map(res => res)
        .subscribe( data => this.postResponse,
            err => {
                let obj = JSON.parse(err._body);
                document.getElementsByClassName('alert')[0].innerHTML = obj.error.split('\\r\\n').join('<br/>').split('\'').join('');
            },
            () => {
                let obj = JSON.parse(JSON.stringify(this.data));
                localStorage.setItem('token', obj.token);
                this.router.navigate(['./']);
            }
        );
    }
}
