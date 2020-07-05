import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './containers/movies/movies.component'
import { HomeComponent } from './containers/home/home.component';
import { LastMoviesComponent } from './containers/last-movies/last-movies.component';
import { MostPopularComponent } from './containers/most-popular/most-popular.component';
import { RegisterComponent } from './containers/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { LoginComponent } from './containers/login/login.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { MovieComponent } from './containers/movie/movie.component'
//Genres
import { ScienceFictionComponent } from './containers/genre/science-fiction/science-fiction.component';
import { ActionComponent } from './containers/genre/action/action.component';
import { AdventuresComponent } from './containers/genre/adventures/adventures.component';
import { AnimationComponent } from './containers/genre/animation/animation.component';
import { ComedyComponent } from './containers/genre/comedy/comedy.component';
import { FantasyComponent } from './containers/genre/fantasy/fantasy.component';
import { PassionComponent } from './containers/genre/passion/passion.component';
import { TerrorComponent } from './containers/genre/terror/terror.component';
import { ThrillerComponent } from './containers/genre/thriller/thriller.component';
import { WesternComponent } from './containers/genre/western/western.component';

const routes: Routes = [
  {path: "", component:HomeComponent},  
  {path: "allmovies", component:MoviesComponent},
  {path: "lastmovies", component:LastMoviesComponent},
  {path: "mostpopular", component:MostPopularComponent},
  {path: "signup", component:RegisterComponent},
  {path: "search", component:SearchComponent},
  {path: "login", component:LoginComponent},
  {path: "profile", component:ProfileComponent},
  {path: "movie", component:MovieComponent},
  //Genres routes
  {path: "sciencefiction", component:ScienceFictionComponent},
  {path: "action", component:ActionComponent},
  {path: "adventures", component:AdventuresComponent},
  {path: "animation", component:AnimationComponent},
  {path: "comedy", component:ComedyComponent},
  {path: "fantasy", component:FantasyComponent},
  {path: "passion", component:PassionComponent},
  {path: "terror", component:TerrorComponent},
  {path: "thriller", component:ThrillerComponent},
  {path: "western", component:WesternComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
