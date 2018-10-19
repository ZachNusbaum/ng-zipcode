import { ZippoService } from './zippo.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ZipcodeFormComponent } from './zipcode-form/zipcode-form.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { ReverseLookupFormComponent } from './reverse-lookup-form/reverse-lookup-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ZipcodeFormComponent,
    ReverseLookupFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [ZippoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
