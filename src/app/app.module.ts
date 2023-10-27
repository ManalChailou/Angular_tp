import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { AdresseComponent } from './adresse/adresse.component';
import { ObservableComponent } from './observable/observable.component';
import {AppRountingModule} from "./app-routing.module";
import { PipeTestPipe } from './pipe-test.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    StagiaireComponent,
    AdresseComponent,
    ObservableComponent,
    PipeTestPipe
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
