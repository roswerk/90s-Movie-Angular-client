import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public sidenavToggle = new EventEmitter();
  


  constructor() { }

  ngOnInit(): void {
  }

 /**
   * This method will toggle the hamburger menu-bar when a certain min-width (650px) is triggered.
   * @returns a hamburger nav-bar replacing the original side-navbar.
   */
  
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

 /**
   * This function will logOut the user from their curren session by deleting their session token and information from the localStorage.
   * @returns a redirection to the welcome-page
   */

  logOut(){
    localStorage.clear();
    window.location.replace("/90s-Movie-Angular-client/welcome");
    
  }

}