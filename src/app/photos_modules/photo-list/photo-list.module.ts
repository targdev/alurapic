import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotoPropertiesComponent } from './photo-properties/photo-properties.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { ApPhotosComponent } from '../ap-photos/photos.component';
import { ApPhotosModule } from '../ap-photos/photos.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotoPropertiesComponent,
    LoadButtonComponent,
    FilterByDescription
  ],
  imports: [
    CommonModule,
    ApPhotosModule
  ]
})
export class PhotoListModule { }
