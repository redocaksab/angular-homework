import { environment } from '../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IMovie, IMovieInf } from '../models/movie.interface';
import { Observable } from 'rxjs';

@Injectable()
export class MovieService {
    public httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Authorization': `Bearer ${environment.API_KEY}`
        })
    }

    constructor(private httpClient: HttpClient) {}

    public getMovies(filmTitle: string): Observable<IMovie> {
        return this.httpClient.get<IMovie>(`${environment.BASE_URL}/search/movie?query=${filmTitle}&api_key=f06a2e114e4b3a01ae78dd727e1d0c6e&language=en-US`, this.httpOptions)
    }
    public getMovieInf(filmId: number): Observable<IMovieInf> {
        return this.httpClient.get<IMovieInf>(`${environment.BASE_URL}/movie/${filmId}?api_key=f06a2e114e4b3a01ae78dd727e1d0c6e&language=en-US`, this.httpOptions)
    }
    public getTop20(): Observable<IMovie> {
        return this.httpClient.get<IMovie>(`${environment.BASE_URL}/trending/movie/week?api_key=f06a2e114e4b3a01ae78dd727e1d0c6e`, this.httpOptions)
    }
}