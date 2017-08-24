import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';



@Component({
  selector: 'narucivanje',
  templateUrl: './narucivanje.html'

})
export class NarucvivanjeComponent {

  narucivanjeForm: ControlGroup;
  http: Http;
  router: Router;
  postResponse: String;
  itemId: Number;
  data: Object[];
  token: String;
  constructor( http: Http,  router: Router, params: RouteParams) {
      this.itemId = +params.get('knjige_ID');
      this.token= localStorage.getItem('token');
    this.http = http;
	this.router = router;
    this.narucivanjeForm = new FormGroup({
        naziv_zanr: new FormControl(),
        naziv_knjige: new FormControl(),
        opis: new FormControl(),
        cena: new FormControl(),
        username: new FormControl()
   });
   var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

    this.http.get('http://localhost/phpKnjige/getKnjigeById.php?knjige_ID=' + this.itemId , { headers: headers })
      .map(res => res.json())
      .subscribe(data => {
        (<Control>this.narucivanjeForm.controls['naziv_zanr']).updateValue(data.knjige.naziv_zanr);
        (<Control>this.narucivanjeForm.controls['naziv_knjige']).updateValue(data.knjige.naziv_knjige);
        (<Control>this.narucivanjeForm.controls['opis']).updateValue(data.knjige.opis);
        (<Control>this.narucivanjeForm.controls['cena']).updateValue(data.knjige.cena);
      },

      err => console.log(JSON.stringify(err)))


      this.http.get('http://localhost/phpKnjige/getUserByToken.php?token=' + this.token, { headers: headers })
        .map(res => res.json())
        .subscribe(data => {
          (<Control>this.narucivanjeForm.controls['username']).updateValue(data.username.username);

        },

        err => console.log(JSON.stringify(err)))
  }

send(): void {

  var data = "username="+this.narucivanjeForm.value.username
  +"&naziv_zanr="+this.narucivanjeForm.value.naziv_zanr + "&naziv_knjige=" + this.narucivanjeForm.value.naziv_knjige
  +"&opis="+this.narucivanjeForm.value.opis +"&cena="+this.narucivanjeForm.value.cena;
  var headers = new Headers();
  headers.append('Content-Type', 'application/x-www-form-urlencoded');

  this.http.post('http://localhost/phpKnjige/narudzbina.php',data, {headers:headers})
    .map(res => res)
    .subscribe( data => this.postResponse = data,
  err => {
    var obj = JSON.parse(err._body);
    document.getElementsByClassName("alert")[0].style.display = "block";
    document.getElementsByClassName("alert")[0].innerHTML = obj.error.split("\\r\\n").join("<br/>").split("\"").join("");
  },
  () => {
      this.router.parent.navigate(['./knjige']);
      alert ("Čestitamo na kupovini");

   }
  );
  }


}

}
