import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!: NgForm; 
  /* If you're sure that the property(addPropertyForm) will be assigned a value before it's used,
  you can use the definite assignment assertion (!) to tell TypeScript not to worry about the initialization.*/
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

}
