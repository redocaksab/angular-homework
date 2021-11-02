
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilmSearchComponent } from './components/film-search/film-search.component';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { Top20Component } from './components/top20/top20.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  { path: 'filmSearch', component: FilmSearchComponent},
  { path: 'movie/:id', component: FilmItemComponent},
  {path: 'top20', component: Top20Component},
  { path: '**', redirectTo: '/about' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
