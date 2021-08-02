import { Component, OnInit, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

// Import Fetching API DATA module
import { FetchApiDataService } from 'src/app/fetch-api-data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  value = localStorage.getItem("userName");

  movies : any [] = [];
  
  @Input() 
  userData = { 
  userName: localStorage.getItem("userName"), 
  password: "", 
  email: localStorage.getItem("email"), 
  birthDate: localStorage.getItem("birthDate")
};
  

  userObj = {
   userName: localStorage.getItem("userName"),
   password: localStorage.getItem("password"),
   email: localStorage.getItem("email"),
   favMovies: localStorage.getItem("favMovies"),
   birthDate: localStorage.getItem("birthDate"),
  } 

  constructor(
    public fetchApiData: FetchApiDataService,
    public snackBar: MatSnackBar
  ) {
   }



   changeBirthDate(){
    let currentBirth = localStorage.getItem("birthDate");
    console.log(currentBirth)
    let newBirth = JSON.stringify(currentBirth).slice(1,11)
    console.log(newBirth)
    return localStorage.setItem("birthDate", newBirth);
   }
   
  

  ngOnInit(): void {
    this.changeBirthDate();
    this.getMovies()
    this.getFavMovies()
  }


  editUser(): void{

    this.fetchApiData.editUser(this.userData).subscribe((resp) => {
      console.log(resp)
      this.snackBar.open(`${this.userData.userName}has been updated!`, 'OK', {
        duration: 2000,
      });
});
};

getMovies(): void{
  this.fetchApiData.getAllMovies().subscribe((resp: any) => {
    this.movies = resp;
    console.log(this.movies);
    return this.movies
  });
}

getFavMovies(){
  let favMovies = localStorage.getItem("favMovies");
  let movies = this.movies;
  console.log(movies)
}


}