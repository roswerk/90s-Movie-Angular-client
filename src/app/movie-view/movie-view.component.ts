import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit {

  constructor(@Inject (MAT_DIALOG_DATA)
    public movie: {
      title: string,
      description: string,
      imageURL: string,
      feature: boolean,
      director: string,
      genre: string,
    }
  ) { }

  ngOnInit(): void {
  }

}
