import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasApiService {
  URL_API = `https://api.themoviedb.org/3/discover/movie?api_key=5ba4b657ce8be5d3b83bdfd09f8df740&page=1-5`;
  constructor(private http: HttpClient) { }

  getPeliculas () : Observable<any> {
    return this.http.get<any>(this.URL_API).pipe(map((data: any) => data.results))
  }
}
