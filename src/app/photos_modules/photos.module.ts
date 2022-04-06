import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { PhotosComponent } from "./app-photos/photos.component";
import { PhotoListComponent } from './photo-list/photo-list.component';

@NgModule({
    declarations: [ PhotosComponent, 
        PhotoListComponent ],
    imports: [ HttpClientModule ]
})

export class PhotosModule {}