import {Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import {Router} from '@angular/router';
import{KomentariComponent} from '../komentari/komentari.component';


@Component({

 selector: 'pricaonica',
 templateUrl: './pricaonica.html'

})


export class PricaonicaComponent {

  komentarForm: ControlGroup;
    http: Http;
    router: Router;
    postResponse: String;
    token: String;
    token2: String;

     username: Object[];



    constructor( http: Http,  router: Router) {
    this.http = http;
    this.router = router;
    this.token = localStorage.getItem('token');
    this.token2 = localStorage.getItem('token2');
      this.komentarForm = new FormGroup({
          username: new FormControl(),
          komentar: new FormControl(),
     });
     var headers = new Headers();
     headers.append('Content-Type', 'application/x-www-form-urlencoded');
     if (localStorage.getItem('token')) {
     http.get('http://localhost/phpKnjige/getUserByToken.php?token=' + this.token , {headers:headers})
     .map(res => res.json())
     .subscribe(username => {
            (<Control>this.komentarForm.controls['username']).updateValue(username.username.username);

          },
          err => console.log(JSON.stringify(err)))

    }
    else {

      http.get('http://localhost/phpKnjige/getAdminByToken.php?token2=' + this.token2 , {headers:headers})
      .map(res => res.json())
      .subscribe(username => {
             (<Control>this.komentarForm.controls['username']).updateValue(username.username.username);

           },
           err => console.log(JSON.stringify(err)))


    }

}
    onAddComment(): void {

          var data =
              "komentar="+this.komentarForm.value.komentar + "&user="+this.komentarForm.value.username;
          var headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded');

          this.http.post('http://localhost/phpKnjige/dodajKomentar.php',data, {headers:headers})
              .map(res => res)
              .subscribe( data => this.postResponse = data,
                  err => alert(JSON.stringify(err)),
                  () => {
                    if(this.postResponse._body.indexOf("error") === -1){
                        alert("Uspešno ste ostavili komentar");
                        this.router.parent.navigate(['./P']);
                    }else{
                        alert("Dogodila se greška");
                    }
                  }
              );

      }

}
