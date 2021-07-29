import { Component, OnInit, Input, Output, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

// Import Fecth Data Api
import { FetchApiDataService } from '../fetch-api-data.service';

// Dialog Materials
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-genre-form',
  templateUrl: './genre-form.component.html',
  styleUrls: ['./genre-form.component.scss']
})
export class GenreFormComponent implements OnInit {
  // movies: any [] = []

  // @Input() genre = {
  //   name: "",
  //   description: "",
  //   genreImg: ""
  // };

  // constructor(
  //   public fetchApiData: FetchApiDataService,
  //   public dialogRef: MatDialogRef<GenreFormComponent>,
  //   public snackBar: MatSnackBar, 
  // ) { }

  // @Inject() public data = {
  //   name: "",
  //   description: "",
  //   genreImg: ""
  // }


  constructor(@Inject(MAT_DIALOG_DATA)
  public genre: {
    name: string;
    description: string;
    genreImg: string;

  }) { }

  ngOnInit(): void {
    // this.getMovies()
    // this.getGenre();
  }

  // getGenre(): void{
  //   this.fetchApiData.getGenre(this.).subscribe((resp: any) => {
  //     this.genre = resp;
  //     console.log(this.genre);
  //     return this.genre
  //   })
  // }


  // getGenre(): void{
  //   console.log("This is on genre-form")
  //   console.log(this.genre)
  //   this.fetchApiData.getAllMovies().subscribe((resp: any) => {
  //     this.movies = resp;
  //     this.genre = this.movies[0].genre;
  //     console.log(this.genre);
  //     console.log(this.movies);
  //     return this.genre
  //   })
  //   console.log("post operation:")
  //   console.log(this.genre)
  // }

  // getMovies(): void{
  //   this.fetchApiData.getAllMovies().subscribe((resp: any) => {
  //     this.movies = resp;
  //     console.log(this.movies);
  //     return this.movies
  //   });
  // }

  // getGenre(): void{
  //   this.fetchApiData.getGenre(this.genre.name).subscribe((resp: any) => {

  //     this.genre = resp;
  //     console.log(this.genre);
  //     console.log(this.movies);
  //     return this.genre
  //   })
  //   console.log("post operation:")
  //   console.log(this.genre)
  // }
};

