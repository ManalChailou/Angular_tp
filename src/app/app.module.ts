import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { ObservableComponent } from './observable/observable.component';
import {AppRountingModule} from "./app_rounting.module";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StagiaireComponent,
    AdresseComponent,
    ObservableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRountingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
