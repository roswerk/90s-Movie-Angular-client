// Basic angula imports
import { Component, OnInit, Input } from '@angular/core';
// Connect to DB endpoints
import { FetchApiDataService } from '../fetch-api-data.service';

// Dialog element imports
// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
// You'll use this import to close the dialog on success
import {MatDialogRef} from "@angular/material/dialog";

// Import routing modules
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() loginData = {
    userName: "",
    password: ""
  }

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar, 
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  loginUser(): void{
    this.fetchApiData.userLogin(this.loginData).subscribe((result) => {
      
      this.dialogRef.close() //This will close the modal
      console.log(result);
      console.log("Testing localStorage:");
      console.log(result.userObj)
      localStorage.setItem("userName" ,result.userObj.userName);
      localStorage.setItem("password" ,result.userObj.password);
      localStorage.setItem("email" ,result.userObj.email);
      localStorage.setItem("favMovies" ,result.userObj.favoriteMovies);
      localStorage.setItem("birthDate" ,result.userObj.birthDate)
      localStorage.setItem("token" ,result.token);
      
      this.snackBar.open(result, "OK", {
        duration: 2000,
      }); 
      this.router.navigate(['movies'])
    }, (result) => {
      this.snackBar.open(result, "OK", {
        duration: 2000,
      });
    });
  };
};
