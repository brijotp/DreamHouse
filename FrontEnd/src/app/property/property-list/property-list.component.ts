import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HousingDataService } from 'src/app/services/housing-data.service';
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  purposeParam = 1;
  properties: Array<IProperty> = [];
  constructor(private route:ActivatedRoute, private housingDataService: HousingDataService) {}
  ngOnInit(): void {
    if(this.route.snapshot.url.toString()) {
      this.purposeParam = 2; // when we have some value in route=>snapshot=>url it means we are in rent page.
    }
    this.housingDataService.getProperties(this.purposeParam).pipe(
      catchError(error => {
        console.log(error);
        return throwError(() => new Error('Not able to fetch housing data'));
      })
    ).subscribe((data) => {
      console.log(data);
      this.properties = data;
      // console.log(this.route.snapshot.url.toString());
    });
  }
}
