import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, Subject } from 'rxjs';

import { typePhoto } from 'src/app/services/photo.model';
import { PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit, OnDestroy {
 photosList: typePhoto[] = [];
 filter: string = '';
 debounce: Subject<string> = new Subject<string>()
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
    this.debounce
    .pipe(debounceTime(300))
    .subscribe(filter  => this.filter = filter)
  }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var element = target as HTMLInputElement;
      this.debounce.next(element.value);
    }
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  loadMorePhotos() {
    this.photoService
    .listFromUserPaginated(this.userName, ++this.currentPage)
    .subscribe(photos => {
      this.photosList = this.photosList.concat(photos);
      if(!photos.length) this.hasMore = false;
    })
  }
}

