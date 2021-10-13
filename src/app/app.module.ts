import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RegisterRealtyModule } from './components/register-realty/register-realty.module';
import { LayoutMainModule } from './components/layout-main/layout-main.module';
import { JobhayModule } from './components/jobhay/jobhay.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // FeatureModule
    RegisterRealtyModule,
    LayoutMainModule,
    JobhayModule,


    // import 3th module
    ModalModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
