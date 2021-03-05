import { Component, OnInit } from '@angular/core';
import { PeliculasApiService } from '../../services/peliculas-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private peliculasSrv: PeliculasApiService) { }
  allPeliculas : Observable<any>;

  ngOnInit(): void {
    this.getPelicula();
  }

  getPelicula(){
    this.allPeliculas = this.peliculasSrv.getPeliculas();
  }
}
