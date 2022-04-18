import { Component, OnDestroy, OnInit } from '@angular/core';
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
 filter: string = '';
 hasMore: boolean = true;
 currentPage: number = 1;
 userName: string = '';

  constructor( 
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService
    ) { }

  ngOnInit(): void {
    this.userName = this.activatedRoute.snapshot.params['userName'];
    this.photosList = this.activatedRoute.snapshot.data['photos'];
  }

  loadMorePhotos() {
    this.filter = '';
    this.photoService
    .listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.photosList = this.photosList.concat(photos);
      if(!photos.length) this.hasMore = false;
    })
  }
}

