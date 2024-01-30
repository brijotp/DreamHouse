import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserStorageService } from 'src/app/services/user-storage.service';
import * as alertify from "alertifyjs";

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  /* If you're sure that the variable registrationForm will be assigned a value before it's used,
  you can use the definite assignment assertion (!) to tell TypeScript not to worry about the initialization.*/
  user: User = {} as User;
  userSubmitted: boolean = false;
  constructor(private fb: FormBuilder, private userService: UserStorageService) { }

  ngOnInit() {
    // this.registrationForm = new FormGroup({
    //   userName: new FormControl('Your Name', Validators.required),
    //   email: new FormControl('abc@gmail.com', [Validators.required, Validators.email]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl('1111111111', [Validators.required, Validators.maxLength(10)])
    // },  this.passwordMatchingValidator);
    // First Approach
    this.createRegistrationForm();
  }

  // createRegistrationForm(){
  //   this.registrationForm = this.fb.group({
  //     userName:['Your Name', Validators.required],
  //     email:['abc@gmail.com', [Validators.required, Validators.email]],
  //     password:[null, [Validators.required, Validators.minLength(8)]],
  //     confirmPassword:[null, [Validators.required]],
  //     mobile: ['1111111111', [Validators.required, Validators.maxLength(10)]]
  //   },{Validators:  this.passwordMatchingValidator});
  // }
  // Second Approach: Deprecated

  createRegistrationForm() {
    const controls = {
      userName: ['Your Name', Validators.required],
      email: ['abc@gmail.com', [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(8)]],
      confirmPassword: [null, [Validators.required]],
      mobile: ['1111111111', [Validators.required, Validators.maxLength(10)]]
    };
    const options: AbstractControlOptions = {
      validators: this.passwordMatchingValidator
    };
  
    this.registrationForm = this.fb.group(controls, options);
  }
  // Third Approach: The current best approach
  

  passwordMatchingValidator:ValidatorFn = (fg: AbstractControl) =>  {
    return fg.get('password')?.value === fg.get('confirmPassword')?.value ? null :  {notmatched: true};
    /* With optional chaining (?.), if the property or method on the left side of the chain is null or undefined,
     the entire expression evaluates to undefined rather than throwing an error. */
  }

  onSubmit(){
    console.log(this.registrationForm.value);
    this.userSubmitted = true;
    if (this.registrationForm.valid){
      // this.user = Object.assign(this.user, this.registrationForm.value);
      this.userService.addUser(this.userData());
      this.registrationForm.reset();
      this.userSubmitted = false;
      alertify.success("Congrats, Registration Completed")
    }
    else{
      alertify.error("Kindly complete the required fields")
    }
  }

  onCancel(){
    this.userSubmitted = false;
  }

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,      
      mobile: this.mobile.value
    }
  }

  get userName(){
    return this.registrationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registrationForm.get('email') as FormControl;
  }

  get password(){
    return this.registrationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registrationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registrationForm.get('mobile') as FormControl;
  }
}
