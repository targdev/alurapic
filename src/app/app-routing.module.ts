import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoFormComponent } from './photos_modules/photo-form/photo-form.component';
import { PhotoListComponent } from './photos_modules/photo-list/photo-list.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoListResolver } from './photos_modules/photo-list/photo-list.resolver';

const routes: Routes = [
  { path: 'user/:userName', 
  component: PhotoListComponent,
  resolve: {
    photos: PhotoListResolver
  }
},
  { path: 'p/add', component: PhotoFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
