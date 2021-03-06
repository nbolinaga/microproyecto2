import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LoginService } from 'src/app/services/login.service';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class PeliculasApiService {
  user: firebase.User = null;
  page: number = 2;
  KEY = '5ba4b657ce8be5d3b83bdfd09f8df740';
  URL_ESTRENOS = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.KEY}&language=es-ES`;

  constructor(private http: HttpClient, public authService: LoginService) {
    this.authService.getCurrentUser().subscribe(user => {
      this.user = user;
    })
  }

  getPeliculas () : Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.KEY}&language=es-ES&page=${this.page}&include_adult=true`).pipe(map((data: any) => data.results))
  }
  getEstrenos () : Observable<any> {
    return this.http.get<any>(this.URL_ESTRENOS).pipe(map((data: any) => data.results))
  }
  getBusqueda(search: string) : Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${this.KEY}&language=es-ES&query=${search}&page=${this.page}&include_adult=true`).pipe(map((data: any) => data.results))
  }

  getByID(id: number) : Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${id}?api_key=${this.KEY}&language=es-ES`)
  }

  resetPages(){
    this.page = 1;
  }
  nextPage(){
    this.page++;
  }

  prevPage(){
    if(this.page != 1){
      this.page--;
    }
  }
}
