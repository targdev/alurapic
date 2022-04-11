import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { typePhoto } from 'src/app/services/photo.model';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
 photosList: typePhoto[] = [];

  constructor( 
    private PhotoService: PhotoService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const userName = this.activatedRoute.snapshot.params['userName'];
    
    this.PhotoService
      .listFromUser(userName)
      .subscribe(implementPhotos => this.photosList = implementPhotos)
  }
}

