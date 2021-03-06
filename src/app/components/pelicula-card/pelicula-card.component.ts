import { Component, Input, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import firebase from 'firebase';

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
  @Input() date: number;
  @Input() id: number;


  constructor(public authService: LoginService) {
    this.authService.getCurrentUser().subscribe(user => {
      this.logged = user;
    })
  }

  favorite: boolean = false;
  logged: firebase.User = null;

  ngOnInit(): void {
    this.imagen = "https://image.tmdb.org/t/p/original" + this.imagen
  }

  favorited(){
    this.favorite = !this.favorite;
  }
}
