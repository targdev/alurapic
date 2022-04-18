import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoListComponent } from './photo-list.component';
import { PhotoPropertiesComponent } from './photo-properties/photo-properties.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescription } from './filter-by-description.pipe';
import { ApPhotosModule } from '../ap-photos/photos.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchPhotosComponent } from './search-photos/search-photos.component';
import { DarkenOnHoverModule } from 'src/app/shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  declarations: [
    PhotoListComponent,
    PhotoPropertiesComponent,
    LoadButtonComponent,
    FilterByDescription,
    SearchPhotosComponent
  ],
  imports: [
    CommonModule,
    ApPhotosModule,
    CardModule,
    DarkenOnHoverModule
  ]
})
export class PhotoListModule { }
