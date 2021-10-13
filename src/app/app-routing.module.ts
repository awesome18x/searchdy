import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutMainComponent } from './components/layout-main/layout-main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full'
  },
  {
    path: 'welcome',
    component: LayoutMainComponent,
  },
  {
    path: 'register-realty',
    loadChildren: () => import('./components/register-realty/register-realty.module').then(m => m.RegisterRealtyModule)
  },
  {
    path: 'job-hay',
    loadChildren: () => import('./components/jobhay/jobhay.module').then(m => m.JobhayModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
