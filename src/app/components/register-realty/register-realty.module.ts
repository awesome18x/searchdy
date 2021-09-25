import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRealtyRoutingModule } from './register-realty-routing.module';
import { RegisterRealtyComponent } from './register-realty.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RegisterRealtyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RegisterRealtyRoutingModule
  ]
})
export class RegisterRealtyModule { }
