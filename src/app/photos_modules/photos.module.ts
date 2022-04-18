import { NgModule } from "@angular/core";

import { ApPhotosModule } from "./ap-photos/photos.module";
import { PhotoFormModule } from "./photo-form/photo-form.module";
import { PhotoListModule } from "./photo-list/photo-list.module";


@NgModule({
    imports: [ 
        ApPhotosModule,
        PhotoFormModule,
        PhotoListModule
    ]
})

export class PhotosModule {}