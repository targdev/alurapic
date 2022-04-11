import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotosComponent } from "./ap-photos/photos.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';
import { PhotoPropertiesComponent } from './photo-list/photo-properties/photo-properties.component';

@NgModule({
    declarations: [ 
        PhotosComponent, 
        PhotoListComponent, 
        PhotoFormComponent, 
        PhotoPropertiesComponent 
    ],
    imports: [ 
        HttpClientModule,
        CommonModule 
    ]
})

export class PhotosModule {}