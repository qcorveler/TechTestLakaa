import { Routes } from '@angular/router';
import { MagasinComponent } from './pages/magasin/magasin.component';
import { RseComponent } from './pages/rse/rse.component';

export const routes: Routes = [
  { path: '', redirectTo: '/magasin', pathMatch: 'full' },
  { path: 'magasin', component: MagasinComponent },
  { path: 'rse', component: RseComponent }
];