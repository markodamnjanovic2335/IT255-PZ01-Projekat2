
import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';


@Component({

 selector: 'KomentariPage',
 templateUrl: './komentari.html',


})


export class KomentariComponent {

  http: Http;
 router: Router;


 komentari: Object[];
  constructor( http: Http, router: Router) {
 this.http = http;
 this.router = router;
 var headers = new Headers();

 http.get('http://localhost/phpKnjige/getKomentari.php',{headers:headers})
 .map(res => res.json())
 .subscribe(komentari => {this.komentari = komentari.komentari;
 });

}
}
