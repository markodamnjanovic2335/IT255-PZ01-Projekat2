
import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
    selector: 'knjige',
    templateUrl: `./knjige.component.html`,
})

export class KnjigeComponent {

    http: Http;
    router: Router;
    postResponse: any;
    servisi: Object[];

    constructor(http: Http,  router: Router) {
        this.http = http;
        this.router = router;
        let headers = new Headers();
        let $:any;
        http.get('http://localhost/phpKnjige/getservis.php', {headers: headers})
         .map(res => res.json())
         .subscribe(servisi => {
         this.servisi = servisi.servisi;
         console.log(this.servisi);
         setInterval(function(){
             $ = window['jQuery'];
         $('table').DataTable();
         }.bind(this), 500);
         },
         err => {
         this.router.navigate(['./']);
         }
         );
         }

         public removeServis(item: Number) {
         console.log('Remove: ', item);
         let headers = new Headers();
         headers.append('Content-Type', 'application/x-www-form-urlencoded');
         headers.append('token', localStorage.getItem('token'));
         this.http.get('http://localhost/phpKnjige/deleteservis.php?id=' + item, {headers: headers})
         .subscribe( data => this.postResponse = data,
         err => alert(JSON.stringify(err)),
         () => {
         if (this.postResponse._body.indexOf('error') === -1) {
         alert('Uspesno izbrisan bicikl');
         this.router.navigate(['./knjige']);
         }else {
         alert('Neuspesno izbrisana knjiga');
         }
         }
         );
         location.reload();
         }
         public editItem(item: any){

       	this.router.parent.navigate(['./NarucivanjePage',{knjige_ID: item.knjige_ID}])
       }

    }
