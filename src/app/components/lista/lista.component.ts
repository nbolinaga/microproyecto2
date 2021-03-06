import { Component, OnInit } from '@angular/core';
import { PeliculasApiService } from '../../services/peliculas-api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {

  constructor(private peliculasSrv: PeliculasApiService) { }
  peliculas : Observable<any>;
  search: string = "";
  currentPage: number = 1;

  ngOnInit(): void {
    this.getPeliculas();
  }

  getPeliculas(){
    this.peliculas = this.peliculasSrv.getPeliculas();
  }

  getBusqueda(){
    this.currentPage = 1;
    this.peliculasSrv.resetPages();
    this.peliculas = this.peliculasSrv.getBusqueda(this.search);
  }

  nextPage(){
    this.peliculasSrv.nextPage();
    this.call();
    this.currentPage++;
  }

  prevPage(){
    this.peliculasSrv.prevPage();
    this.call();
    if(this.currentPage != 1)
    {
      this.currentPage--;
    }
  }

  call(){
    if(this.search != ""){
      this.peliculas = this.peliculasSrv.getBusqueda(this.search);
    } else {
      this.peliculas = this.peliculasSrv.getPeliculas();
    }
  }
}
