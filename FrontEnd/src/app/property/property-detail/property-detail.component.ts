import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId: number = 0;
  constructor(private route : ActivatedRoute, private router: Router) { }

  ngOnInit() {    
    this.propertyId = +this.route.snapshot.params['Id'];
      /* this.propertyId = Number(this.route.snapshot.params['Id']);
       + is used for type conversion/casting to number */
    this.route.params.subscribe(
      (params) => {
      this.propertyId = +params['Id'];
    });
  }

  nextPage(){
    this.propertyId += 1;
    this.router.navigate(['/property-detail', this.propertyId]);
  }

}
