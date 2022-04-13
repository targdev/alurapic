import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ApPhotosComponent } from './photos.component';

@NgModule({
  declarations: [ApPhotosComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [ApPhotosComponent]
})
export class ApPhotosModule { }
