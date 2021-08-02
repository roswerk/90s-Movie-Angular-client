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