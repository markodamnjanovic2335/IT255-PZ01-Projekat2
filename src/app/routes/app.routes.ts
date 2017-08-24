import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from '../home/home.component';
import { ObiblioteciComponent } from '../obiblioteci/obiblioteci.component';
import { DodajKnjiguComponent } from '../dodajknjigu/dodajknjigu.component';
import { KnjigeComponent } from '../knjige/knjige.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RegisterComponent } from '../registrovanje/register.component';
import { PricaonicaComponent } from '../pricaonica/pricaonica.component';
import { KomentariComponent } from '../komentari/komentari.component';
import { NarucvivanjeComponent} from '../narucivanje/narucivanje.component';
import { NarudzbineComponent } from '../narudzbine/narudzbine.component';
import { TestComponent } from '../test/test.component';
import { LoginComponent } from '../logovanje/login.component';

const appRoutes: Routes = [
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

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
