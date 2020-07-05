import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './containers/register/register.component';
import { LoginComponent } from './containers/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { MoviesComponent } from './containers/movies/movies.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './containers/home/home.component';
import { LastMoviesComponent } from './containers/last-movies/last-movies.component';
import { MostPopularComponent } from './containers/most-popular/most-popular.component';
import { ActionComponent } from './containers/genre/action/action.component';
import { PassionComponent } from './containers/genre/passion/passion.component';
import { AnimationComponent } from './containers/genre/animation/animation.component';
import { AdventuresComponent } from './containers/genre/adventures/adventures.component';
import { ScienceFictionComponent } from './containers/genre/science-fiction/science-fiction.component';
import { ComedyComponent } from './containers/genre/comedy/comedy.component';
import { TerrorComponent } from './containers/genre/terror/terror.component';
import { ThrillerComponent } from './containers/genre/thriller/thriller.component';
import { WesternComponent } from './containers/genre/western/western.component';
import { FantasyComponent } from './containers/genre/fantasy/fantasy.component';
import { ProfileComponent } from './containers/profile/profile.component';
import { MovieComponent } from './containers/movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HeaderComponent,
    MoviesComponent,
    SearchComponent,
    HomeComponent,
    LastMoviesComponent,
    MostPopularComponent,
    ActionComponent,
    PassionComponent,
    AnimationComponent,
    AdventuresComponent,
    ScienceFictionComponent,
    ComedyComponent,
    TerrorComponent,
    ThrillerComponent,
    WesternComponent,
    FantasyComponent,
    ProfileComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
