import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMovieInf } from 'src/app/models/movie.interface';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {
  movieInf: IMovieInf | undefined;
  id: number = 0;
  constructor(private route: ActivatedRoute, private movieService: MovieService) { 
      this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.movieService.getMovieInf(this.id).subscribe((res: IMovieInf) => {
      this.movieInf = res;
      //console.log(res);
    });
  }

}
