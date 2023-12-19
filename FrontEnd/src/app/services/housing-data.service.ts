import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../property/IProperty.interface';

@Injectable({
  providedIn: 'root',
})
export class HousingDataService {
  constructor(private http: HttpClient) {}

  getProperties(): Observable<IProperty[]> {
    return this.http.get<IProperty[]>('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<IProperty> = [];
        console.log(data.length)
        for (let id = 0; id < data.length; id++) {
          propertiesArray.push(data[id]);
          console.log(propertiesArray);
          console.log(data);
          console.log(data[id]);
        }

        // for (const id in data) {
        //   console.log(id);
        //   if (data.hasOwnProperty(id)) {
        //     propertiesArray.push(data[id]);
        //     console.log(propertiesArray);
        //   }
        // }
        return propertiesArray;
      })
    );
  }
}
