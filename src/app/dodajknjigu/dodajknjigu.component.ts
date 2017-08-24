
import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
    selector: 'dodajknjigu',
    templateUrl: `./dodajknjigu.component.html`,
})

export class DodajKnjiguComponent {

    http: Http;
    router: Router;
    addForm: FormGroup;
    data: any;
    postResponse: any;
    zanrovi: any;


    constructor(http: Http, router: Router) {
        this.http = http;
        this.router = router;

        if (localStorage.getItem('token') != null) {
            this.router.navigate(['']);
        }

        this.addForm = new FormGroup({
            zanr_id: new FormControl(),
            naziv_knjige: new FormControl(),
             autor: new FormControl(),
            opis: new FormControl(),
            cena: new FormControl()
        });

       let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        http.get('http://localhost/phpKnjige/getzanr.php', {headers: headers})
            .map(res => res.json()).share()
            .subscribe( zanrovi => {
                    this.zanrovi = zanrovi.zanrovi;
                    console.log('Zanrovi:' + this.zanrovi);
                },
                err => {
                    this.router.navigate(['./dodajknjigu']);
                }
            );


    }

    onAdd(): void {
        var data = "zanr_id=" + this.addForm.value.zanr_id+"&naziv_knjige=" + this.addForm.value.naziv_knjige + "&autor=" + this.addForm.value.autor + "&opis=" + this.addForm.value.opis +  + "&cena=" + this.addForm.value.cena;
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('http://localhost/phpKnjige/addservisservice.php', this.data, {headers: headers})
            .map(res => res)
            .subscribe( data => this.postResponse = data,
                err => alert(JSON.stringify(err)),
                () => {
                    if (this.postResponse._body.indexOf('error') === -1) {
                        alert('Uspesno dodavanje knjige');
                        this.router.navigate(['./']);
                    }else {
                        alert('Neuspesno dodavanje knjige');
                    }
                }
            );
    }
}
