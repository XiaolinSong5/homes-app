import { Injectable } from '@angular/core';
import {HousingLocation} from "./housing-location";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  urlDbServer='http://localhost:3000/locations';
  urlBackendList='http://localhost:8080/locations';
  urlBackendSingle='http://localhost:8080/location';

  constructor(private http: HttpClient) { }

  getAllHousingLocations(): Observable<HousingLocation[]> {
    const data = this.http.get<HousingLocation[]>(this.urlBackendList);
    return data ?? [];
  }

  getHousingLocationById(id:number) : Observable<HousingLocation | undefined> {
    const data = this.http.get<HousingLocation>(`${this.urlBackendSingle}?locationId=${id}`);
    return data ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
    
  }
}
