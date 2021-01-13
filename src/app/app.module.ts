import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './core/components/banner/banner.component';
import { FormComponent } from './core/pages/form/form.component';
import { SuccessComponent } from './core/pages/success/success.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    FormComponent,
    SuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
