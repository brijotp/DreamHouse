import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';
import { User } from '../model/user';
import { IPropertyBase } from '../model/ipropertyBase';

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

  getProperty(id: number) {
    return this.getAllProperties().pipe(
      map(propertiesArray => {
        return propertiesArray.find(p => p.Id === id) as Property | undefined;
      })
    );
  }

  getAllProperties(Purpose?: number): Observable<IPropertyBase[]> {
    return this.http.get('data/properties.json').pipe(
      map((data: any) => {
        const propertiesArray: Array<IPropertyBase> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProp') || '{}');
  
        if (localProperties) {
          for (const id in localProperties) {
            if (Purpose) {
              if (localProperties.hasOwnProperty(id) && localProperties[id].Purpose === Purpose) {
                propertiesArray.push(localProperties[id]);
              }
            } else {
              propertiesArray.push(localProperties[id]);
            }
          }
        }
  
        for (const id in data) {
          if (Purpose) {
            if (data.hasOwnProperty(id) && data[id].Purpose === Purpose) {
              propertiesArray.push(data[id]);
            }
          } else {
            propertiesArray.push(data[id]);
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
