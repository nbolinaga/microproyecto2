import { Component, OnInit } from '@angular/core';
import { ParamMap, Router } from '@angular/router';
import { PeliculasApiService } from '../../services/peliculas-api.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import firebase from 'firebase';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.scss']
})
export class DetallesComponent {
  id: number = 0;
  imgLink: string;
  // UNICA MANERA QUE LOGRE FUNCIONARA, PERDONAME
  peliculas : any;
  logged: firebase.User = null;
  favorite: boolean = false;

  constructor(private peliculasSrv: PeliculasApiService, public router:Router, private route: ActivatedRoute, public authService: LoginService) {
    this.authService.getCurrentUser().subscribe(user => {
      this.logged = user;
    })
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });
    this.getBusqueda();
    this.imgLink = "https://image.tmdb.org/t/p/original" + this.peliculas.poster_path;
  }

  getBusqueda(){
    this.peliculasSrv.getByID(this.id).subscribe(posts => {
      this.peliculas = posts;
    })
  }

  favorited(){
    this.favorite = !this.favorite;
  }
}
