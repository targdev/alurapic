import { Component, Input, OnInit } from '@angular/core';
import { typePhoto } from 'src/app/services/photo.model';

@Component({
  selector: 'ap-photo-properties',
  templateUrl: './photo-properties.component.html',
  styleUrls: ['./photo-properties.component.scss']
})
export class PhotoPropertiesComponent implements OnInit {
  @Input() photos: typePhoto[] = [];
  rows: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: typePhoto[]) {
    let newRows = [];

    for(let i = 0; i < photos.length; i += 3) {
      newRows.push(photos.slice(i, i + 3));
    }

    return newRows;
  }
}
