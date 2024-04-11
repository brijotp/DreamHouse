import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class HousingDataService {
  constructor(private http: HttpClient) {}

  getProperties(purpose: number): Observable<IProperty[]> {
    return this.http.get<IProperty[]>('data/properties.json').pipe(
      map((data) => {
        const propertiesArray: Array<IProperty> = [];
        console.log(data.length);
        // for (let id = 0; id < data.length; id++) {
        //   propertiesArray.push(data[id]);
        //   console.log(propertiesArray.length);
        //   console.log(propertiesArray);
        //   console.log(data);
        //   console.log(data[id]);
        // }

        for (const id in data) {
          // console.log(id);
          if (data.hasOwnProperty(id) && data[id].Purpose === purpose) {
            propertiesArray.push(data[id]);
            console.log(propertiesArray.length);
            console.log(propertiesArray);
            console.log(data);
            console.log(id);
            console.log(data[id]);
          }
        }
        return propertiesArray;
      })
    );
  }

  addProperty(property: Property){
    let properties: Property[] = [];

    const storedPropertiesString = localStorage.getItem('newProp');
    if(storedPropertiesString){
      const storedProperties = JSON.parse(storedPropertiesString) as Property;
      if(Array.isArray(storedProperties)){
        properties = storedProperties;
      }
    }

    properties = [property, ...properties];
    localStorage.setItem('newProp', JSON.stringify(properties))
  }

  // addUser(user: User) {
  //   let users: User[] = [];
  
  //   const storedUsersString  = localStorage.getItem('Users');
  //   if (storedUsersString) { 
  //     const storedUsers = JSON.parse(storedUsersString) as User;   
  //     if (Array.isArray(storedUsers)) {
  //       users = storedUsers;
  //     }
  //   }
  
  //   users = [user, ...users];
  //   localStorage.setItem('Users', JSON.stringify(users));
  // }

  newPropID(): number {
    if(localStorage.getItem('PID')){
      let newId = +localStorage.getItem('PID')! + 1;
      localStorage.setItem('PID', String(newId));
      return newId;
    }
    else{
      localStorage.setItem('PID','101');
      return 101;
    }
  }
}
