import { Component, OnInit, Output, EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
 
  constructor() { }
 
  ngOnInit() {
  }
 
   /**
   * This method will toggle the hamburger menu-bar when a certain max-width (650px) is triggered.
   * @returns the hamburger nav-bar will be replaced with the original side-navbar.
   */
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }
 
/**
   * This function will logOut the user from their curren session by deleting their session token and information from the localStorage.
   * @returns a redirection to the welcome-page
   */
  logOut(){
    localStorage.clear();
    window.location.replace("/");
  }

}
 