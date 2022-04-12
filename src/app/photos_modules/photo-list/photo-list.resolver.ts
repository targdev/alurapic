import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { typePhoto } from "src/app/services/photo.model";
import { PhotoService } from "src/app/services/photo.service";

@Injectable({ providedIn: 'root' })
export class PhotoListResolver implements Resolve<Observable<typePhoto[]>> {
 
    constructor(private PhotoService: PhotoService) {}
    resolve(route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): Observable<typePhoto[]> | 
                 Observable<Observable<typePhoto[]>> |
                 Promise<Observable<typePhoto[]>> 
         {
        let userName = route.params["userName"];

        return this.PhotoService.listFromUser(userName);
    }
}