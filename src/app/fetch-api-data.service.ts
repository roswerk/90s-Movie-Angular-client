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


  export class FetchApiDataService{
   /**
   * Inject HttpClient module to the constructor params.
   * This will provide HttpClient to the entire class, making it available via this.http.
   */
  constructor (private http: HttpClient){
  }

// Register a User endpoint: https://api90smovies.herokuapp.com/users/add



 /**
   * User registration
   * @param userDetails
   * @description Adds a new user object to the Users DB.
   * @returns confirmation message and userDetails console on dev-tools
   */

  // Making the API call for the User Registration endpoint
  public userRegistration(userDetails: any): Observable <any>{
    console.log(userDetails);
    return this.http
     .post(apiUrl + "users/add/", userDetails)
     .pipe(catchError(this.handleError));
  }


 /**
   * User login 
   * @param userDetails 
   * @description Logs In user
   * @returns userObj with bearer token
   */

// User Login endpoint: https://api90smovies.herokuapp.com/login?userName=test1&password=12345

  // Making the API call for the User Login endpoint
  public userLogin(userDetails: any): Observable <any>{
    console.log(userDetails);
    return this.http
    .post(apiUrl + "login", userDetails)
    .pipe(catchError(this.handleError));
  }



  /**
   * Get All Movies
   * @returns Array of movie objects.
   */

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



  /**
   * Get specific Movie
   * @description Get a specific Movie's details by title 
   * @param movieTitle
   * @returns selected movie object
   */  
  
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
  


/**
   * Get specific Director
   * @description Get a specific Directors's details by name
   * @param directorName
   * @returns selected director's details object
   */   

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



/**
   * Get specific Genre 
   * @description Get a specific Genre's details by genreName
   * @param genreName
   * @returns selected genre's details object
   */   

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



/**
   * Get favMovies
   * @description Get all selected favMovies by the user
   * @param userName
   * @returns Array of favMovies ID's 
   */   

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



/**
   * Add favMovies
   * @description Add favMovies ID's to the userObj
   * @param movie_Id
   * @returns confirmation/failed message of movieID added to userObj
   */   

// Adds Fav Movie endpoint: https://api90smovies.herokuapp.com/users/{userName}/favMovies/{movie_Id}

  // Making the API call for the addFavMovie endpoint
  public addFavMovie(movie_Id: any): Observable<any> {

    const token = localStorage.getItem('token');
    const user = localStorage.getItem('userName');
    console.log(token)
    console.log(user)

    return this.http.post(apiUrl + `users/${user}/favMovies/${movie_Id}`, movie_Id,
      {headers: new HttpHeaders(
      {Authorization: 'Bearer ' + token,})}
      ).pipe(catchError(this.handleError));
  }



/**
   * Edit User details
   * @description Edit User Object (userName, password, email, DateOfBirth)
   * @param userDetails
   * @returns confirmation/failed message of userObj being updated and consoled on dev-tool
   */   

// Edits endpoint: https://api90smovies.herokuapp.com/user/{userName}

  // Making the API call for the EditUser endpoint
  public editUser(userDetails: any): Observable<any> {

    const token = localStorage.getItem('token');
    const user = localStorage.getItem('userName');

    return this.http
    .put(apiUrl + `user/${user}`, userDetails, 
      {headers: new HttpHeaders(
      {Authorization: 'Bearer ' + token,})}
      ).pipe(catchError(this.handleError));
  }



/**
   * Delete User 
   * @description Deletes User details completely from DB
   * @param userName
   * @returns confirmation/failed message of userObj being deleted
   */   

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



/**
   * Delete FavMovies 
   * @description Deletes FavMovies from userObj
   * @param movieId
   * @returns confirmation/failed message of FavMovies being deleted from userObj
   */   

// Deletes Fav Movie endpoint: https://api90smovies.herokuapp.com/users/{userName}/Movies/{movieId}

  // Making the API call for the deleteFavMovie endpoint
  public deleteFavMovie(movieId: any): Observable<any> {

    const token = localStorage.getItem('token');
    const user = localStorage.getItem('userName');

    return this.http
    .delete(apiUrl + `users/${user}/Movies/${movieId}`, 
      {headers: new HttpHeaders(
      {Authorization: 'Bearer ' + token,})}
      ).pipe(catchError(this.handleError));
  }


  private extractResponseData(res: Object): any {
    const body = res;
    return body || { };
  }

  /**
   * Error handler
   * @param error
   */

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