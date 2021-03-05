import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pelicula-card',
  templateUrl: './pelicula-card.component.html',
  styleUrls: ['./pelicula-card.component.scss']
})
export class PeliculaCardComponent implements OnInit {
  @Input() title: string;
  @Input() popularidad: number;
  @Input() idioma: string;
  @Input() imagen: string;

  constructor() { }

  ngOnInit(): void {
    this.imagen = "https://image.tmdb.org/t/p/original" + this.imagen
  }

}
