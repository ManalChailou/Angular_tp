import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {
  nom: any;
  prenom: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.nom = params.get('nom');
      this.prenom = params.get('prenom');
      console.log(this.nom + ' ' + this.prenom); // Corrected the closing curly brace to a closing parenthesis
    });
  }

}
