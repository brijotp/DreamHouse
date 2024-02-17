import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IProperty } from 'src/app/model/iproperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm;
  /* If you're sure that the property(addPropertyForm) will be assigned a value before it's used,
  you can use the definite assignment assertion (!) to tell TypeScript not to worry about the initialization.*/
  @ViewChild('formTabs') formTabs!: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']
  readyToMove: Array<string> = ['East', 'West', 'South', 'North']

  propertyView: IProperty = {} as IProperty;
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onHomePress()
  {
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('congrats form submitted');    
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }

}
