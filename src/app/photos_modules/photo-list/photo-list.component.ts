import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
 photos: any[] = [];

  constructor( private PhotoService: PhotoService) { }

  ngOnInit(): void {
    this.PhotoService
      .listFromUser("flavio")
      .subscribe(implementPhotos => this.photos = implementPhotos)
  }
}

