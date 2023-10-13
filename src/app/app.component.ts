import { Component } from '@angular/core';
import {Personne} from "./classes/personne";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Tp';
  updateTitle(event: any) {
    this.title = event.target.value;
  }
  personne: Personne=new Personne(100,'Sam','John');
  tab: number[] = [2,5,8];
  constructor() {}
  direBonjour(){
    return "Bonjour Angular";
  }
}
