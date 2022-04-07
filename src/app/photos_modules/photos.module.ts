import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PhotosComponent } from "./app-photos/photos.component";
import { PhotoListComponent } from './photo-list/photo-list.component';
import { PhotoFormComponent } from './photo-form/photo-form.component';

@NgModule({
    declarations: [ 
        PhotosComponent, 
        PhotoListComponent, PhotoFormComponent 
    ],
    imports: [ 
        HttpClientModule,
        CommonModule 
    ]
})

export class PhotosModule {}