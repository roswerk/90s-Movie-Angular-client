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
import { MatSnackBar } from '@angular/material/snack-bar';
import { keyframes } from '@angular/animations';
import { HeaderComponent } from '../navigation/header/header.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

/**
 * This component is responsible of rendering the Movie Card Views.
 */

export class MovieCardComponent implements OnInit {

  movies: any [] = [];
  userObj = {
    userName: localStorage.getItem("userName"),
    password: localStorage.getItem("password"),
    email: localStorage.getItem("email"),
    favMovies: localStorage.getItem("favMovies"),
    birthDate: localStorage.getItem("birthDate"),
   } 

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar) 
    { }

  ngOnInit(): void {
    this.getMovies();
  }

  
/**
   * Fetch all Movies from DB.
   * @returns All movies stored in the DB.
   */

  getMovies(): void{
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
      this.movies = resp;
      console.log(this.movies);
      return this.movies
    });
  }

/**
   * Fetch a specific movie Genre and open Genre Dialog.
   * @returns genre information about a specific movie in form of a dialog.
   */

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

/**
   * Fetch a specific movie Director and open Director Dialog.
   * @returns director information about a specific movie in form of a dialog.
   */

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

/**
   * Fetch a specific movie details and open the movie Dialog.
   * @returns the movie details in form of a dialog.
   */
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


/**
   * Adds a movie to the favMovies array and stores it in localStorage.
   * @returns a snackBar confirming/failing to add a movie to the DB.
   */  
 addFavMovie(
   movie_Id: any): void{

     this.fetchApiData.addFavMovie(movie_Id).subscribe(() => {
      // Getting fav movies from local storage 
      let favMovies = localStorage.getItem("favMovies");
      let newFav = movie_Id;

      // If LocalStorage's favMovies is empty, create a new item
      if(favMovies === null){
        localStorage.setItem("favMovies", newFav)
        // If localStorage has an favMovies key, append new favMovie to it
      }else{
        localStorage.setItem("favMovies", favMovies +", "+ newFav)
      }
      
      this.snackBar.open(`${movie_Id} has been added to your favorites!`, 'OK', {
        duration: 2000,
      });
    });
}

/**
   * Deletes a movie from the favMovies array and errases the localStorage version.
   * @returns a snackBar confirming/failing the errasing of a FavMovie from the DB.
   */  
 delMovies(
  movie_Id: any): void{
    this.fetchApiData.deleteFavMovie(movie_Id).subscribe(() => {

      let favMovies = localStorage.getItem("favMovies");
      let deltedFavMovie = movie_Id;
  
      this.snackBar.open(`${movie_Id} has been added to your favorites!`, 'OK', {
        duration: 2000,
      });
});

}


}