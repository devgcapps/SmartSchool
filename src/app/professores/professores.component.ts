import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  title = "Professores;";

  public professores = [
    {nome: "Marco"},
    {nome: "Julio"},
    {nome: "Felip"},
    {nome: "mirel"},
    {nome: "Julia"},
    {nome: "naiar"},
    {nome: "moaci"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
