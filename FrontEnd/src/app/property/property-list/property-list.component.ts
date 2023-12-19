import { Component, OnInit } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { HousingDataService } from 'src/app/services/housing-data.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent implements OnInit {
  properties: Array<IProperty> = [];
  constructor(private housingDataService: HousingDataService) {}
  ngOnInit(): void {
    this.housingDataService.getProperties().pipe(
      catchError(error => {
        console.log(error);
        return throwError(() => new Error('Not able to fetch housing data'));
      })
    ).subscribe((data) => {
      console.log(data);
      this.properties = data;
    });
  }
}
