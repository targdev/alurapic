import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { typePhoto } from "./photo.model";

@Injectable({ providedIn: 'root'})

export class PhotoService {
  apiPhotos = 'http://localhost:3000';

  constructor( private http: HttpClient ) { }

  listFromUser(userName: string) {
    return this.http
           .get<typePhoto[]>(this.apiPhotos + "/" + userName + "/photos")
  }

  listFromUserPaginated(userName: string, page: number) {
    let params = new HttpParams().append('page', page)

    return this.http
           .get<typePhoto[]>(this.apiPhotos + "/" + userName + "/photos", { params })
  }
}

