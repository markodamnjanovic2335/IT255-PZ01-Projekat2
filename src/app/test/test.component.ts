
import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';



@Component({
 selector: 'test',
 templateUrl: './test.html'


})

export class TestComponent {


  http: Http;
  router: Router;
  postResponse: String;

   	spisak: Object[];

	constructor(builder: FormBuilder, http: Http,  router: Router) {
	this.http = http;
	this.router = router;
	var headers = new Headers();

	http.get('http://localhost/phpKnjige/spisakKorisnika.php',{headers:headers})
		.map(res => res.json())
		.subscribe(spisak => {
			this.spisak = spisak.spisak;
			setInterval(function(){
				$('table').DataTable();
			},200);
		},
		err => {
			 this.router.parent.navigate(['./']);
		}
	);
  }

  public remove(item: Number) {
      console.log("Remove: ", item);
	  var headers = new Headers();
		headers.append('Content-Type', 'application/x-www-form-urlencoded');

	  this.http.get('http://localhost/phpKnjige/obrisiProfil.php?korisnici_ID='+ item,{headers:headers})  .subscribe( data => this.postResponse = data);
	 location.reload();
   }

}
