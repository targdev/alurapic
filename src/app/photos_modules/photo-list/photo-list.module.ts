import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotoPropertiesComponent } from './photo-properties/photo-properties.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { ApPhotosModule } from '../ap-photos/photos.module';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotoPropertiesComponent,
    LoadButtonComponent,
    FilterByDescription
  ],
  imports: [
    CommonModule,
    ApPhotosModule,
    CardModule
  ]
})
export class PhotoListModule { }
