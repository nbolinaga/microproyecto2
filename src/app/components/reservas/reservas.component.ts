import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {
  pelicula: string = '';
  tickets: number = 0;
  reservas: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
