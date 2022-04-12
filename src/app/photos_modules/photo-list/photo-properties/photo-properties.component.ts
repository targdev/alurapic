import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { typePhoto } from 'src/app/services/photo.model';

@Component({
  selector: 'ap-photo-properties',
  templateUrl: './photo-properties.component.html',
  styleUrls: ['./photo-properties.component.scss']
})
export class PhotoPropertiesComponent implements OnChanges {

  @Input() photos: typePhoto[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
      if(changes['photos'])
          this.rows = this.groupColumns(this.photos);
  }

  groupColumns(photos: typePhoto[]) {
      const newRows = [];

      for(let index = 0; index < photos.length; index += 3) {
          newRows.push(photos.slice(index, index + 3));
      }

      return newRows;
  }
}