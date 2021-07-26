// Basic angula imports
import { Component, OnInit, Input } from '@angular/core';
// Connect to DB endpoints
import { FetchApiDataService } from '../fetch-api-data.service';

// Dialog element imports
// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';
// You'll use this import to close the dialog on success
import {MatDialogRef} from "@angular/material/dialog";

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
    public snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  loginUser(): void{
    this.fetchApiData.userLogin(this.loginData).subscribe((result) => {

      this.dialogRef.close() //This will close the modal
      
      this.snackBar.open(result, "OK", {
        duration: 2000,
      });
    }, (result) => {
      this.snackBar.open(result, "OK", {
        duration: 2000,
      });
    });
  };
};
