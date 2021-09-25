import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutMainRoutingModule } from './layout-main-routing.module';
import { LayoutMainComponent } from './layout-main.component';
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    LayoutMainComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutMainRoutingModule
  ]
})
export class LayoutMainModule { }
