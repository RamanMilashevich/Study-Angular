import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard';

import { authGuard } from './auth-guard';
import { Parent } from './homework/parent/parent';
import { Child } from './homework/child/child';
import { ChildStringComponent } from './homework/child-string/child-string';
import { NotFoundError } from 'rxjs';
import { NotFoundComponent } from './homework/not-found-component/not-found-component';

export const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: Parent},
  {path: 'child', component: Child},
  {path: 'child-string', component: ChildStringComponent},
  {path: '**', component: NotFoundComponent}

];
