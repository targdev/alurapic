import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { typePhoto } from 'src/app/services/photo.model';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
 photosList: typePhoto[] = [];
 filter: string = '';

  constructor( private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.photosList = this.activatedRoute.snapshot.data['photos'];
  }

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var element = target as HTMLInputElement;
      this.filter = element.value;
    }
  }
}

