import { Injectable } from '@angular/core';
import {HousingLocation} from "./housing-location";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  url='http://localhost:3000/locations';

  constructor(private http: HttpClient) { }

  getAllHousingLocations(): Observable<HousingLocation[]> {
    return this.http.get<HousingLocation[]>(this.url);
  }

  async getHousingLocationById(id:number) : Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json() ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
    
  }
}
