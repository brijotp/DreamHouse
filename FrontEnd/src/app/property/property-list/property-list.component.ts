import { Component } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css'],
})
export class PropertyListComponent {
  properties: any = [
    {
      Id: 1,
      Type: 'House',
      Price: 12000,
      Name: 'Thekkan House',
    },
    {
      Id: 2,
      Type: 'Flat',
      Price: 19000,
      Name: 'Naiu House',
    },
    {
      Id: 3,
      Type: 'House',
      Price: 12900,
      Name: 'jyhut House',
    },
    {
      Id: 4,
      Type: 'House',
      Price: 13000,
      Name: 'Ertig House',
    },
    {
      Id: 5,
      Type: 'Apartment',
      Price: 15000,
      Name: 'hgih House',
    },
    {
      Id: 6,
      Type: 'House',
      Price: 17000,
      Name: 'Dagarian House',
    },
    {
      Id: 7,
      Type: 'House',
      Price: 12000,
      Name: 'Thor House',
    },
    {
      Id: 8,
      Type: 'House',
      Price: 32000,
      Name: 'King House',
    },
    {
      Id: 9,
      Type: 'Flat',
      Price: 22000,
      Name: 'Sikj House',
    },
    {
      Id: 10,
      Type: 'House',
      Price: 34222,
      Name: 'Karma House',
    },
    {
      Id: 11,
      Type: 'House',
      Price: 32333,
      Name: 'Edachira House',
    },
  ];
}
