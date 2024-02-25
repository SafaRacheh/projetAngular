import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './pages/residences/residences.component';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormResidenceComponent } from './pages/form-residence/form-residence.component';
import { FormAppartmentComponent } from './pages/form-appartment/form-appartment.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    FormResidenceComponent,
    FormAppartmentComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
