// Basic Angular imports
import { Component, OnInit } from '@angular/core';
// API data fetch
import { FetchApiDataService } from '../fetch-api-data.service';

// import Genre Form
import { GenreFormComponent } from '../genre-form/genre-form.component';
// import Director Form
import { DirectorFormComponent } from '../director-form/director-form.component';
// import MovieView Dialog
import { MovieViewComponent } from '../movie-view/movie-view.component';


// Import Dialog resources
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent implements OnInit {

  movies: any [] = [];

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMovies();
  }


  getMovies(): void{
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies
    });
  }

  openGetGenreDialog(
    name: string,
    description: string,
    genreImg: string,
  ): void{
  this.dialog.open(GenreFormComponent, {
      data: {
        name: name,
        description: description,
        genreImg: genreImg
  }
})
}

openGetDirectorDialog(
  name: string,
  bio: string,
  placeOfBirth: string,
  birthDate: Date,
  directorImg: string
): void{
  this.dialog.open(DirectorFormComponent,{
    data:{
      name: name,
      bio: bio,
      placeOfBirth: placeOfBirth,
      birthDate: birthDate,
      directorImg: directorImg
    }
  });
};

openMovieViewDialog(
  title: string,
  description: string,
  imageURL: string,
  feature: boolean,
  director: string,
  genre: string
): void{
  this.dialog.open(MovieViewComponent, {
    data:{
      title: title,
      description: description,
      imageURL: imageURL,
      feature: feature,
      director: director,
      genre: genre  
      }
    });
  };





}



