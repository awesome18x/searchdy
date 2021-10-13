import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JobhayRoutingModule } from './jobhay-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    JobhayRoutingModule
  ]
})
export class JobhayModule { }
