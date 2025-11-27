// app.routes.ts
import { Routes } from '@angular/router';
import { Parent } from './homework/parent/parent';
import { Child } from './homework/child/child';
import { ChildStringComponent } from './homework/child-string/child-string';
import { NotFoundComponent } from './homework/not-found-component/not-found-component';
import { AuthGuard } from './app.route.guard';
import { ReportDetailsResolver } from './homework/service/report-details.resolver';
import { LoadReportsList } from './homework/load-reports-list/load-reports-list';

import { ParentComponent } from './homework/onpush-strategy-parent/onpush-strategy-parent';
import { SignalsParent } from './homework/signals/signals';
import { DirectiveComponent } from './homework/directive-component/directive-component';
import { RxJsExample } from './homework/rx-js-example/rx-js-example';
import { TemplateDrivenForm } from './homework/templatedriven-form/templatedriven-form';
import { ReplayDemoComponent } from './homework/rxjs-subjects/rxjs-subjects';
import { Reactive } from './homework/reactive/reactive';
import { SignalsExample } from './homework/signals-example/signals-example';
import { SignalsMethods } from './homework/signals-methods/signals-methods';
import { SignalsConvertObservable } from './homework/signals-convert-observable/signals-convert-observable';
import { HtmlAngularSanitazer } from './homework/html-angular-sanitazer/html-angular-sanitazer';
import { For } from './homework/for/for';
import { AppComponentTemplate } from './homework/ng-template-outlet/app/app';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

  {
    path: 'dashboard',
    component: Parent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      { path: 'new1', loadComponent: loadNew1 },
      { path: 'new1/:id', loadComponent: loadNew2 },
      { path: ':id', loadComponent: loadAbout },        // <-- was top-level, now child
      { path: '', pathMatch: 'full', redirectTo: 'new1' }
    ]
  },
  { path: 'reports', loadComponent: loadReportsList },
  { path: 'reports/:id', loadComponent: loadReportDetails, resolve: { report: ReportDetailsResolver } },
  { path: 'forms/template', loadComponent: loadFormsTemplateDemo },
  { path: 'directives', component: DirectiveComponent },
  { path: 'onpush', component: ParentComponent},
  { path: 'rxJS', component: RxJsExample
  },{
    path: 'subjects', component: ReplayDemoComponent
  },
  {
    path: 'templatedrivenform', component: TemplateDrivenForm
  },{
    path: 'reactive', component: Reactive
  },{
    path: 'zoneJS', component: LoadReportsList
  },
  { path: 'signals', component: SignalsParent},
  { path: 'child', component: Child },
  { path: 'child-string', component: ChildStringComponent },
  { path: 'signals2', component: SignalsExample },
  { path: 'signalsmethods', component: SignalsMethods},
  {path: 'signalobservables', component: SignalsConvertObservable},
  {path: 'sanitazer', component: HtmlAngularSanitazer},
  {path: 'for', component: For},
  { path: 'injector', component: AppComponentTemplate},
  { path: '**', component: NotFoundComponent },

];

// ---- Lazy loaders with named pickers (no anonymous functions) ----
export function loadAbout() {
  return import('./homework/about.component/about.component').then(pickAbout);
}
function pickAbout(
  m: typeof import('./homework/about.component/about.component')
) {
  return m.AboutComponent;
}

export function loadNew1() {
  return import('./homework/new1/new1').then(pickNew1);
}
function pickNew1(m: typeof import('./homework/new1/new1')) {
  return m.New1;
}

export function loadNew2() {
  return import('./homework/new2/new2').then(pickNew2);
}
function pickNew2(m: typeof import('./homework/new2/new2')) {
  return m.New2;
}

export function loadReportsList() {
  return import('./homework/load-reports-list/load-reports-list').then(module => module.LoadReportsList)
}
export function loadReportDetails() {
  return import('./homework/load-reports-details/load-reports-details').then(module => module.LoadReportsDetails)
}

// Forms demo lazy loaders (keep named for better stack traces)
export function loadFormsTemplateDemo() {
  return import('./components/forms-template-demo').then(m => m.AppComponent);
}
