import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasApiService {
  page: number = 2;
  KEY = '5ba4b657ce8be5d3b83bdfd09f8df740';
  URL_ESTRENOS = `https://api.themoviedb.org/3/movie/upcoming?api_key=${this.KEY}`;

  constructor(private http: HttpClient) { }

  getPeliculas () : Observable<any> {
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/top_rated?api_key=${this.KEY}&language=en-US&page=${this.page}&include_adult=true`).pipe(map((data: any) => data.results))
  }
  getEstrenos () : Observable<any> {
    return this.http.get<any>(this.URL_ESTRENOS).pipe(map((data: any) => data.results))
  }
  getBusqueda(search: string) : Observable<any>{
    return this.http.get<any>(`https://api.themoviedb.org/3/search/movie?api_key=${this.KEY}&language=en-US&query=${search}&page=${this.page}&include_adult=true`).pipe(map((data: any) => data.results))
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
