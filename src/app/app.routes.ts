import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BoutiqueSacsComponent } from './components/boutique-sacs/boutique-sacs.component';
import { BoutiqueBraceletsComponent } from './components/boutique-bracelets/boutique-bracelets.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Page d'accueil
  { path: 'sacs', component: BoutiqueSacsComponent }, // Page des sacs
  { path: 'bracelets', component: BoutiqueBraceletsComponent }, // Page des bracelets
  { path: 'contact', component: ContactComponent }, // Page de contact
  { path: 'about', component: AboutComponent }, // Page à propos
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Redirection en cas de route invalide
];
