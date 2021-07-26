import { Injectable } from '@angular/core';

// Imported modules to make HttpClient service work
import {catchError} from "rxjs/internal/operators"
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {map} from "rxjs/operators";


// Declaring the api url that will provide data for the client app
const apiUrl = "https://api90smovies.herokuapp.com/"

@Injectable({
  providedIn: 'root'
})


// 1 - ==================================================== User Registration
// What? Call the User Registration Endpoint. 
// Method: POST
// Requires Authorization: No
export class UserRegistrationService{
  // Inject HttpClient module to the constructor params

  // This will provide HttpClient to the entire class, making it available via this.http
  constructor (private http: HttpClient){
  }

// Register a User endpoint: https://api90smovies.herokuapp.com/users/add

  // Making the API call for the User Registration endpoint
  public userRegistration(userDetails: any): Observable <any>{
    console.log(userDetails);
    return this.http
     .post(apiUrl + "users/add/", userDetails)
     .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.error("Some error ocurred: ", error.error.message);
    }else{
      console.error(
        `Error Status Code ${error.status}, ` + 
        `Error Body is: ${error.error}`);
    }
    return throwError("Something bad happened; Plese try again later.")
    }
  }



// 2 - ==================================================== User Login
// What? Call the User Login Endpoint
// Method: POST
// Requires Authorization: No
export class UserLoginService{
  // Inject HttpClient module to the constructor params

  // This will provide HttpClient to the entire class, making it available via this.http
  constructor (private http: HttpClient){
  }

// User Login endpoint: https://api90smovies.herokuapp.com/login?userName=test1&password=12345

  // Making the API call for the User Login endpoint
  public userLogin(userDetails: any): Observable <any>{
    console.log(userDetails);
    return this.http
    .post(apiUrl + "login", userDetails)
    .pipe(catchError(this.handleError));
  }


  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.error("Some error ocurred: ", error.error.message);
    }else{
      console.error(
        `Error Status Code ${error.status}, ` + 
        `Error Body is: ${error.error}`);
    }
    return throwError("Something bad happened; Plese try again later.")
    }
  }



// 3 - ==================================================== All Movies
// What? Get all Movies Endpoint
// Method: GET
// Requires Authorization: YES
export class GetAllMoviesService{
  // Inject HttpClient module to the constructor params

  // This will provide HttpClient to the entire class, making it available via this.http
  constructor (private http: HttpClient){
  }

// Get All Movies endpoint: https://api90smovies.herokuapp.com/movies

  // Making the API call for the getAllMovies endpoint
  public getAllMovies(): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http
    .get(apiUrl + 'movies', 
      {headers: new HttpHeaders(
      {Authorization: 'Bearer ' + token,})}
      ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.error("Some error ocurred: ", error.error.message);
    }else{
      console.error(
        `Error Status Code ${error.status}, ` + 
        `Error Body is: ${error.error}`);
    }
    return throwError("Something bad happened; Plese try again later.")
    }

}



// 4 - ==================================================== Get one movie
// What? Call the get one movie Endpoint
// Method: GET
// Requires Authorization: Yes
export class GetMovieService{
    // Inject HttpClient module to the constructor params
  
    // This will provide HttpClient to the entire class, making it available via this.http
    constructor (private http: HttpClient){
    }
  
  // Get All Movies endpoint: https://api90smovies.herokuapp.com/movies/{movieTitle}
  
    // Making the API call for the getMovie endpoint
    public getMovie(movieTitle: any): Observable<any> {
  
      const token = localStorage.getItem('token');
  
      return this.http
      .get(apiUrl + `movies/${movieTitle}`, 
        {headers: new HttpHeaders(
        {Authorization: 'Bearer ' + token,})}
        ).pipe(catchError(this.handleError));
    }
  
    private handleError(error: HttpErrorResponse): any {
      if(error.error instanceof ErrorEvent){
        console.error("Some error ocurred: ", error.error.message);
      }else{
        console.error(
          `Error Status Code ${error.status}, ` + 
          `Error Body is: ${error.error}`);
      }
      return throwError("Something bad happened; Plese try again later.")
      }
  }
  


// 5 - ==================================================== Get Director
// What? Call the Get Director Endpoint
// Method: GET
// Requires Authorization: Yes
export class GetDirectorService{
  // Inject HttpClient module to the constructor params

  // This will provide HttpClient to the entire class, making it available via this.http
  constructor (private http: HttpClient){
  }

// Get Director endpoint: https://api90smovies.herokuapp.com/directors/{directorName}

  // Making the API call for the getDirector endpoint
  public getDirector(directorName: any): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http
    .get(apiUrl + `directors/${directorName}`, 
      {headers: new HttpHeaders(
      {Authorization: 'Bearer ' + token,})}
      ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.error("Some error ocurred: ", error.error.message);
    }else{
      console.error(
        `Error Status Code ${error.status}, ` + 
        `Error Body is: ${error.error}`);
    }
    return throwError("Something bad happened; Plese try again later.")
    }
}



// 6 - ==================================================== Get Genre
// What? Call the Get Genre Endpoint
// Method: GET
// Requires Authorization: Yes
export class GetGenreService{
  // Inject HttpClient module to the constructor params

  // This will provide HttpClient to the entire class, making it available via this.http
  constructor (private http: HttpClient){
  }

// Get Genre endpoint: https://api90smovies.herokuapp.com/genre/{genreName}

  // Making the API call for the getGenre endpoint
  public getGenre(genreName: any): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http
    .get(apiUrl + `genre/${genreName}`, 
      {headers: new HttpHeaders(
      {Authorization: 'Bearer ' + token,})}
      ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.error("Some error ocurred: ", error.error.message);
    }else{
      console.error(
        `Error Status Code ${error.status}, ` + 
        `Error Body is: ${error.error}`);
    }
    return throwError("Something bad happened; Plese try again later.")
    }
}



// 7 - ==================================================== Get User
// What? Call the Get User Endpoint
// Method: GET
// Requires Authorization: Yes
export class GetUserService{
  // Inject HttpClient module to the constructor params

  // This will provide HttpClient to the entire class, making it available via this.http
  constructor (private http: HttpClient){
  }

// Get User endpoint: https://api90smovies.herokuapp.com/user/{userName}

  // Making the API call for the getMovie endpoint
  public getUser(userName: any): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http
    .get(apiUrl + `user/${userName}`, 
      {headers: new HttpHeaders(
      {Authorization: 'Bearer ' + token,})}
      ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.error("Some error ocurred: ", error.error.message);
    }else{
      console.error(
        `Error Status Code ${error.status}, ` + 
        `Error Body is: ${error.error}`);
    }
    return throwError("Something bad happened; Plese try again later.")
    }
}



// 8 - ==================================================== Get Fav Movies from a User
// What? Call the get Fav Movies from a User Endpoint
// Method: GET
// Requires Authorization: Yes
export class GetFavMoviesService{
  // Inject HttpClient module to the constructor params

  // This will provide HttpClient to the entire class, making it available via this.http
  constructor (private http: HttpClient){
  }

// Gets Fav Movies endpoint: https://api90smovies.herokuapp.com/users/{userName}/favMovies/

  // Making the API call for the getFavMovies endpoint
  public getFavMovies(userName: any): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http
    .get(apiUrl + `users/${userName}/favMovies`, 
      {headers: new HttpHeaders(
      {Authorization: 'Bearer ' + token,})}
      ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.error("Some error ocurred: ", error.error.message);
    }else{
      console.error(
        `Error Status Code ${error.status}, ` + 
        `Error Body is: ${error.error}`);
    }
    return throwError("Something bad happened; Plese try again later.")
    }
}



// 9 - ==================================================== Add Fav Movies to a User
// What? Adds Fav Movies to a User Endpoint
// Method: POST
// Requires Authorization: Yes
export class AddFavMoviesService{
  // Inject HttpClient module to the constructor params

  // This will provide HttpClient to the entire class, making it available via this.http
  constructor (private http: HttpClient){
  }

// Adds Fav Movie endpoint: https://api90smovies.herokuapp.com/users/{userName}/favMovies/{movie_Id}

  // Making the API call for the addFavMovie endpoint
  public addFavMovie(userName: any, movie_Id: any): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http
    .post(apiUrl + `users/${userName}/favMovies/${movie_Id}`, 
      {headers: new HttpHeaders(
      {Authorization: 'Bearer ' + token,})}
      ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.error("Some error ocurred: ", error.error.message);
    }else{
      console.error(
        `Error Status Code ${error.status}, ` + 
        `Error Body is: ${error.error}`);
    }
    return throwError("Something bad happened; Plese try again later.")
    }
}



// 10 - ==================================================== Edit User
// What? Edits User Endpoint
// Method: PUT
// Requires Authorization: Yes
export class EditUserService{
  // Inject HttpClient module to the constructor params

  // This will provide HttpClient to the entire class, making it available via this.http
  constructor (private http: HttpClient){
  }

// Edits endpoint: https://api90smovies.herokuapp.com/user/{userName}

  // Making the API call for the EditUser endpoint
  public editUser(userDetails: any): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http
    .put(apiUrl + `user/${userDetails.userName}`, userDetails, 
      {headers: new HttpHeaders(
      {Authorization: 'Bearer ' + token,})}
      ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.error("Some error ocurred: ", error.error.message);
    }else{
      console.error(
        `Error Status Code ${error.status}, ` + 
        `Error Body is: ${error.error}`);
    }
    return throwError("Something bad happened; Plese try again later.")
    }
}



// 11 - ==================================================== Delete User
// What? Delets User Endpoint
// Method: DEL
// Requires Authorization: Yes
export class DeleteUserService{
  // Inject HttpClient module to the constructor params

  // This will provide HttpClient to the entire class, making it available via this.http
  constructor (private http: HttpClient){
  }

// Deletes User endpoint: https://api90smovies.herokuapp.com/users/delete/{userName}

  // Making the API call for the DeleteUser endpoint
  public deleteUser(userName: any): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http
    .delete(apiUrl + `users/delete/${userName}`, 
      {headers: new HttpHeaders(
      {Authorization: 'Bearer ' + token,})}
      ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.error("Some error ocurred: ", error.error.message);
    }else{
      console.error(
        `Error Status Code ${error.status}, ` + 
        `Error Body is: ${error.error}`);
    }
    return throwError("Something bad happened; Plese try again later.")
    }
}



// 12 - ==================================================== Delete Fav Movie
// What? Deletes FavMovie Endpoint
// Method: DEL
// Requires Authorization: Yes
export class DeleteFavMovieService{
  // Inject HttpClient module to the constructor params

  // This will provide HttpClient to the entire class, making it available via this.http
  constructor (private http: HttpClient){
  }

// Deletes Fav Movie endpoint: https://api90smovies.herokuapp.com/users/{userName}/Movies/{movieId}

  // Making the API call for the deleteFavMovie endpoint
  public deleteFavMovie(userName: any, movieId: any): Observable<any> {

    const token = localStorage.getItem('token');

    return this.http
    .delete(apiUrl + `users/${userName}/Movies/${movieId}`, 
      {headers: new HttpHeaders(
      {Authorization: 'Bearer ' + token,})}
      ).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse): any {
    if(error.error instanceof ErrorEvent){
      console.error("Some error ocurred: ", error.error.message);
    }else{
      console.error(
        `Error Status Code ${error.status}, ` + 
        `Error Body is: ${error.error}`);
    }
    return throwError("Something bad happened; Plese try again later.")
    }
}