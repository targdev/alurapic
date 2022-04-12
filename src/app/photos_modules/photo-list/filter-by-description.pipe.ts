import { Pipe, PipeTransform } from '@angular/core';
import { typePhoto } from 'src/app/services/photo.model';

@Pipe({ name: "filterByDescription"})

export class FilterByDescription implements PipeTransform {
    transform(photos: typePhoto[], descriptionQuery: string) {
        descriptionQuery = descriptionQuery
        .trim()
        .toLowerCase();

        if(descriptionQuery) {
            return photos.filter(photos => photos.description.toLowerCase().includes(descriptionQuery))
        } else {
            return photos
        }
    };
};