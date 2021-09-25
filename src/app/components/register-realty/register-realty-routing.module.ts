import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterRealtyComponent } from './register-realty.component';

const routes: Routes = [
  {
    path: '',
    component: RegisterRealtyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRealtyRoutingModule { }
