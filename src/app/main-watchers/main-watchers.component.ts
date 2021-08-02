import { Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-main-watchers',
  templateUrl: './main-watchers.component.html',
  styleUrls: ['./main-watchers.component.scss']
})
export class MainWatchersComponent implements OnInit {

  userObj = {
    userName: localStorage.getItem("userName"),
    password: localStorage.getItem("password"),
    email: localStorage.getItem("email"),
    favMovies: localStorage.getItem("favMovies"),
    birthDate: localStorage.getItem("birthDate"),
   } 

  constructor() { }

  ngOnInit(): void {
  }


}
