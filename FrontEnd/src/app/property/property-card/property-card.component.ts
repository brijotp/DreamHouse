import { Component, Input } from '@angular/core';
import { IProperty } from 'src/app/model/iproperty';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
})
export class PropertyCardComponent {
  @Input() property: IProperty = {} as IProperty;
  @Input() hideIcons: boolean = false;

  bhkValue!: number;
  propertyType!: string;
  propertyName!: string;
  furnitureType!: string;
  propertyPrice!: number;

  ngOnChanges(): void {
    this.bhkValue = this.property?.BHK;
    this.propertyType = this.property?.PType;
    this.propertyName = this.property?.Name;
    this.furnitureType = this.property?.FType;
    this.propertyPrice = this.property?.Price;
  }
}
