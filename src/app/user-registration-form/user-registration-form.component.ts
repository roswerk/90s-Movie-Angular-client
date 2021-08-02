// src/app/user-registration-form/user-registration-form.component.ts
import { Component, OnInit, Input } from '@angular/core';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
// You'll use this import to close the dialog on success
import {MatDialogRef} from "@angular/material/dialog";


@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = {
    userName: "",
    password: "",
    email: "",
    birthDate: ""
  }

  

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar,
    ){ }

  ngOnInit(): void {
  }


  // This is the function responsible for sending the form inputs to the backend
  registerUser(): void{
    this.fetchApiData.userRegistration(this.userData).subscribe((result) => {
      // Logic for a successful user registration goes here
      this.dialogRef.close(); // This will close the modal on success
      console.log(result)
      this.snackBar.open(result.userName + " was successfully registered", "OK", {
        duration: 2000
      }), 
      window.location.replace("/movies");
      localStorage.setItem("userName" ,result.userObj.userName);
      localStorage.setItem("password" ,result.userObj.password);
      localStorage.setItem("email" ,result.userObj.email);
      localStorage.setItem("favMovies" ,result.userObj.favoriteMovies);
      localStorage.setItem("birthDate" ,result.userObj.birthDate);
      localStorage.setItem("token" ,result.token);
    }, (result) => {
      this.snackBar.open(result, "OK", {
        duration: 2000
      });
    });
  }
}
