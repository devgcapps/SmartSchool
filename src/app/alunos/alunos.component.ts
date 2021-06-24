import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

  title = "Alunos";

  public alunos = [
    {nome: 'Felipe' },
    {nome: 'Marco' },
    {nome: 'Junior' },
    {nome: 'Mirella' },
    {nome: 'Milena' },
    {nome: 'Eliza' },
    {nome: 'Marcusi' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
