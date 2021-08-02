import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Importing HttpClient Modules which allows us to perform HTTP requests and 
// easily manipulate those requests and their responses
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Importing Material Modules
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from "@angular/material/icon"; 

// Importing Routing Modules
import { RouterModule, Routes } from '@angular/router';

// User Registration component
import { UserRegistrationFormComponent } from './user-registration-form/user-registration-form.component';
// User Login component
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
// User MovieCard component
import { MovieCardComponent } from './movie-card/movie-card.component';
// Welcome component
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
// Genre Form component
import { GenreFormComponent } from './genre-form/genre-form.component';
// Director Form component
import { DirectorFormComponent } from './director-form/director-form.component';
// MovieView Form component
import { MovieViewComponent } from './movie-view/movie-view.component';

// Navbar components
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component'

// Profile Compoenents
import { ProfileComponent } from './profile/profile/profile.component';

// Import Material Navigation Module
import {MatSidenavModule} from "@angular/material/sidenav"
import {MatTabsModule} from "@angular/material/tabs"
import {MatToolbarModule} from "@angular/material/toolbar";
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MainWatchersComponent } from './main-watchers/main-watchers.component';



const appRoutes: Routes = [
  {path: "", redirectTo: "welcome", pathMatch: "prefix"},
  {path: "welcome", component: WelcomePageComponent},
  {path: "movies", component: MovieCardComponent},
  {path: "profile", component: ProfileComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    UserRegistrationFormComponent,
    UserLoginFormComponent,
    MovieCardComponent,
    WelcomePageComponent,
    GenreFormComponent,
    DirectorFormComponent,
    MovieViewComponent,
    HeaderComponent,
    SidenavComponent,
    ProfileComponent,
    MainWatchersComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    [MatCardModule],
    MatFormFieldModule,
    MatDialogModule,
    MatSnackBarModule,
    FormsModule,
    MatIconModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule 

  ],
  exports: [
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatMenuModule 
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
