import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
 photos: any[] = [];

  constructor( 
    private PhotoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params['userName'];
    this.PhotoService
      .listFromUser(userName)
      .subscribe(implementPhotos => this.photos = implementPhotos)
  }
}

