import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-director-form',
  templateUrl: './director-form.component.html',
  styleUrls: ['./director-form.component.scss']
})
export class DirectorFormComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA)
    public director: {
      name: string,
      bio: string,
      placeOfBirth: string,
      birthDate: Date,
      directorImg: string
    }) { }

  ngOnInit(): void {
  }

}
