import {NgModule} from "@angular/core";
import {Routes,RouterModule} from "@angular/router";
import {StagiaireComponent} from "./stagiaire/stagiaire.component";
import {AdresseComponent} from "./adresse/adresse.component";

const routes: Routes = [
  {path: 'stagaire', component: StagiaireComponent},
  {path: 'stagaire/:nom/:prenom', component: StagiaireComponent},
  {path: 'adresse', component: AdresseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRountingModule{}
