import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-top20',
  templateUrl: './top20.component.html',
  styleUrls: ['./top20.component.scss']
})
export class Top20Component implements OnInit {
  top20: {id: number, title: string}[] | undefined;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
  
    this.movieService.getTop20().subscribe(res => {
      this.top20 = res.results.map(item => ({id: item.id, title: item.title}));
    });
  }

}
