import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Pablo';
  sobrenome = "Pacheco";
  age = 45;
  hobbies= ["Cantar", "Correr", "Nadar"];
  moto = {
    marca: "Honda",
    ano: 2021,
  };

  constructor() { }

  ngOnInit(): void {
  }

}
