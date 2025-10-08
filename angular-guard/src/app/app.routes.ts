import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';

import { authGuard } from './auth-guard';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'login', component: DashboardComponent},
  {path: 'dashboard/:userName', component: DashboardComponent, canActivate: [authGuard]},
  {path: '**', redirectTo: 'login'},
];
