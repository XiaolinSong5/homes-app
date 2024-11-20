import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HousingLocationComponent} from "../housing-location/housing-location.component";
import {HousingLocation} from "../housing-location";
import {HousingService} from "../housing.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
  <section>
  <form>
  <input type="text" placeholder="filter by city" #filter>
  <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
</form>
  </section>
  <section class="results">
  <app-housing-location *ngFor="let housingLocation of filteredLocationList"
  [housingLocation]="housingLocation"></app-housing-location>
</section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  housingService: HousingService = inject(HousingService);
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];

  constructor() {
   this.housingService.getAllHousingLocations().subscribe(housingLocationList => {
       this.housingLocationList = housingLocationList;
       this.filteredLocationList = housingLocationList;
   });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
    }
    this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
    )

  }

}
