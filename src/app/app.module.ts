import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { routing } from './routes/app.routes';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomePageComponent } from './home/home.component';
import { ObiblioteciComponent } from './obiblioteci/obiblioteci.component';
import { DodajKnjiguComponent } from './dodajknjigu/dodajknjigu.component';
import { KnjigeComponent } from './knjige/knjige.component';
import { RegisterComponent } from './registrovanje/register.component';
import { PricaonicaComponent } from './pricaonica/pricaonica.component';
import { KomentariComponent } from './komentari/komentari.component';
import { NarucvivanjeComponent} from './narucivanje/narucivanje.component';
import { NarudzbineComponent } from './narudzbine/narudzbine.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './logovanje/login.component';




@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, routing],
  declarations: [ AppComponent, HomePageComponent,ObiblioteciComponent,DodajKnjiguComponent,TestComponent,PricaonicaComponent,KomentariComponent,NarudzbineComponent,NarucvivanjeComponent,KnjigeComponent, NavbarComponent, RegisterComponent, LoginComponent],
  providers:    [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
