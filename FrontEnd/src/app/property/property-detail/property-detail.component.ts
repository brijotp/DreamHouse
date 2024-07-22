// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';

// @Component({
//   selector: 'app-property-detail',
//   templateUrl: './property-detail.component.html',
//   styleUrls: ['./property-detail.component.css']
// })
// export class PropertyDetailComponent implements OnInit {
//   public propertyId: number = 0;
//   constructor(private route : ActivatedRoute, private router: Router) { }

//   ngOnInit() {    
//     this.propertyId = +this.route.snapshot.params['Id'];
//       /* this.propertyId = Number(this.route.snapshot.params['Id']);
//        + is used for type conversion/casting to number */
//     this.route.params.subscribe(
//       (params) => {
//       this.propertyId = +params['Id'];
//     });
//   }

//   nextPage(){
//     this.propertyId += 1;
//     this.router.navigate(['/property-detail', this.propertyId]);
//   }

// }






// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { HousingDataService } from 'src/app/services/housing-data.service';
// import { Property } from 'src/app/model/property';
// import { IProperty } from 'src/app/model/iproperty';
// import { IPropertyBase } from 'src/app/model/ipropertyBase';

// @Component({
//   selector: 'app-property-detail',
//   templateUrl: './property-detail.component.html',
//   styleUrls: ['./property-detail.component.css']
// })
// export class PropertyDetailComponent implements OnInit {
// public propertyId!: number;
// property = new Property();

//   constructor(private route: ActivatedRoute,
//               private router: Router,
//               private housingService: HousingDataService) { }

//   ngOnInit() {
//     this.propertyId = +this.route.snapshot.params['id'];

//     this.route.params.subscribe(
//       (params) => {
//         this.propertyId = +params['id'];
//         this.housingService.getProperty(this.propertyId).subscribe(
//             (data: Property) => {
//               this.property = data;
//             }          
//         );
//       }
//     );

//   }
// }




// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Router } from '@angular/router';
// import { HousingDataService } from 'src/app/services/housing-data.service';
// import { Property } from 'src/app/model/property';
// import { IPropertyBase } from 'src/app/model/ipropertyBase';

// @Component({
//   selector: 'app-property-detail',
//   templateUrl: './property-detail.component.html',
//   styleUrls: ['./property-detail.component.css']
// })
// export class PropertyDetailComponent implements OnInit {
//   public propertyId!: number;
//   property = new Property();

//   constructor(
//     private route: ActivatedRoute,
//     private router: Router,
//     private housingService: HousingDataService
//   ) { }

//   ngOnInit() {
//     this.propertyId = +this.route.snapshot.params['id'];

//     this.route.params.subscribe(
//       (params) => {
//         this.propertyId = +params['id'];
//         this.housingService.getProperty(this.propertyId).subscribe(
//           (data: Property[]) => {
//             const foundProperty = data.find(p => p.Id === this.propertyId);
//             if (foundProperty) {
//               this.property = foundProperty as Property;
//             }
//           }
//         );
//       }
//     );
//   }
// }



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingDataService } from 'src/app/services/housing-data.service';
import { Property } from 'src/app/model/property';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId!: number;
  property = new Property();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private housingService: HousingDataService
  ) {}

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(params => {
      this.propertyId = +params['id'];
      this.housingService.getProperty(this.propertyId).subscribe(
        (data: Property | undefined) => {
          if (data) {
            this.property = data;
          } else {
            console.log('Property not found');
            this.router.navigate(['/not-found']);
          }
        },
        error => {
          console.error(error);
        }
      );
    });
  }
}
