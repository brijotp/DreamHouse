import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, FormsModule, FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs/public_api';
import { IProperty } from 'src/app/model/iproperty';


@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css'],
})
export class AddPropertyComponent implements OnInit {
  // @ViewChild('Form') addPropertyForm!: NgForm;
  /* If you're sure that the property(addPropertyForm) will be assigned a value before it's used,
  you can use the definite assignment assertion (!) to tell TypeScript not to worry about the initialization.*/
  @ViewChild('formTabs') formTabs!: TabsetComponent;

  addPropertyForm!: FormGroup;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex'];
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished'];
  readyToMove: Array<string> = ['East', 'West', 'South', 'North'];

  propertyView: IProperty = {
    Id: 0,
    Purpose: 0,
    Name: '',
    PType: '',
    FType: '',
    Price: 0,
    BHK: 0,
    BuildArea: 0,
    City: '',
    RTM: 0,
  };

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.CreateAddPropertyForm();
    this.addPropertyForm.valueChanges.subscribe(data => {
      this.mapFormValuesToPropertyView(this.addPropertyForm);
    });
  }

  CreateAddPropertyForm() {
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        Purpose: ['1', Validators.required],
        BHK: [null, Validators.required],
        PType: [null, Validators.required],
        FType: [null, Validators.required],
        Name: [null, Validators.required],
        City: [null, Validators.required],
      }),

      PriceInfo: this.fb.group({
        Price: [null, Validators.required],
        BuildArea: [null, Validators.required],
        CarpetArea: [null],
        Security: [null],
        Maintenance: [null],
      }),

      AddressInfo: this.fb.group({
        FloorNo: [null],
        TotalFloor: [null],
        Address: [null, Validators.required],
        LandMark: [null],
      }),

      OtherInfo: this.fb.group({
        RTM: [null, Validators.required],
        PossessionOn: [null],
        AOP: [null],
        Gated: [null],
        MainEntrance: [null],
        Description: [null],
      }),
    });
  }

  get BasicInfo(){
    return this.addPropertyForm.controls['BasicInfo'] as FormGroup;
  }

  // Method to map form values to propertyView object
  mapFormValuesToPropertyView(form: FormGroup): void {
    // Retrieve form values
    const formValues = form.value;

    // Map BasicInfo
    this.propertyView.Purpose = formValues.BasicInfo.Purpose;
    this.propertyView.BHK = formValues.BasicInfo.BHK;
    this.propertyView.PType = formValues.BasicInfo.PType;
    this.propertyView.FType = formValues.BasicInfo.FType;
    this.propertyView.Name = formValues.BasicInfo.Name;
    this.propertyView.City = formValues.BasicInfo.City;

    // Map PriceInfo
    this.propertyView.Price = formValues.PriceInfo.Price;
    this.propertyView.BuildArea = formValues.PriceInfo.BuildArea;

    // You can continue mapping other sections similarly
    this.propertyView.RTM = formValues.OtherInfo.RTM;
  }

  // onHomePress()
  // {
  //   this.router.navigate(['/']);
  // }

  onSubmit() {
    console.log('congrats form submitted');
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number) {
    if (this.formTabs?.tabs[tabId]) {
      this.formTabs.tabs[tabId].active = true;
    }
  }
}
