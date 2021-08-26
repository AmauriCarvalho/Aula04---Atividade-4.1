import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numeros-tabela',
  templateUrl: './numeros-tabela.component.html',
  styleUrls: ['./numeros-tabela.component.css']
})
export class NumerosTabelaComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  getRandomNumbers(){
    let list: number[] = [];
    for(let i = 1; i<=5; i++){
      list.push(Math.round(Math.random() * 99));
    }
    return list;
  }

}