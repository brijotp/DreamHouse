import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  /* If you're sure that the variable registrationForm will be assigned a value before it's used,
  you can use the definite assignment assertion (!) to tell TypeScript not to worry about the initialization.*/
  constructor() { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      userName: new FormControl('Your Name', Validators.required),
      email: new FormControl('abc@gmail.com', [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl('1111111111', [Validators.required, Validators.maxLength(10)])
    },  this.passwordMatchingValidator);
  }

  passwordMatchingValidator:ValidatorFn = (fg: AbstractControl) =>  {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null :  {notmatched: true};
    /* With optional chaining (?.), if the property or method on the left side of the chain is null or undefined,
     the entire expression evaluates to undefined rather than throwing an error. */
  }

  onSubmit(){
    console.log(this.registrationForm);
  }

}
