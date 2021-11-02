import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IMovie, IResult } from 'src/app/models/movie.interface';
import { MovieService } from './../../services/movie.service';

@Component({
  selector: 'app-film-search',
  templateUrl: './film-search.component.html',
  styleUrls: ['./film-search.component.scss']
})
export class FilmSearchComponent implements OnInit {
  titles: {title: string, id: number}[] = [];
  onChange(e: string) {
    this.getFilms(e);
  }
  

  constructor(private movieService: MovieService) { }

  getFilms(filmTitle: string): void {
    this.movieService.getMovies(filmTitle).subscribe((res: IMovie) => {
      this.titles = res.results.map((item: IResult) => ({title: item.title, id: item.id}) );
    });
  }
  ngOnInit(): void {

  }

}
