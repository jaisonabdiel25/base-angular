import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {

  public title: string = 'bases';
  public numero: number = 10;
  public base: number = 5;

  constructor() { }

  ngOnInit(): void {
  }

  operacion(base:number){
    this.numero += base;
    console.log(this.numero)
  } 

}
