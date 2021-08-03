// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
// Import Dialog components
import { MatDialog } from '@angular/material/dialog';
// User Registration component
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
// User Login component
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';


@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})

/**
 * This component is responsible of rendering the WelcomePage.
 */

export class WelcomePageComponent implements OnInit{
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void{}

/**
* This is the function that will open the dialog when the SignUp button is clicked  
*/

openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
// Assigning the dialog a width
    width: '280px'
    });
  }

/**
* This is the function that will open the dialog when the Login button is clicked  
*/
  
  openUserLoginDialog(): void{
    this.dialog.open(UserLoginFormComponent, {
      width: "280px"
    })
  }

}


