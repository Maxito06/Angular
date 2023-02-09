import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  titulo = "Cien años de soledad";

  constructor(){


  }

  ngOnInit(): void{
    
  }

}

