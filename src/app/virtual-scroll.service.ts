import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ErrorService} from './errorService';
import {MoviesModel} from './Movies';
import {map, catchError} from 'rxjs/operators/';
import {Observable, of, pipe} from 'rxjs';

@Injectable()
export class VirtualScrollService {
  constructor(private http: HttpClient, private errorService: ErrorService) { }

  getMovies(id): Observable<MoviesModel[]>  {
    return this.http.get<MoviesModel[]>('../assets/data.json').pipe(
      map(data => {
        if (data.length === 0) {
          return [];
        } else {
          return this.getMoviesItems(data, id);
        }
      }),
      catchError(err => {
        this.errorService.transformError(err);
        return of(err);
      }),
    );
  }

  getMoviesItems(movies, id) {
    let arr = [];
    movies.forEach(series => id.forEach(id => {
      if (series.id === id) arr.push(series)
    }));

    return arr;
  }
}
