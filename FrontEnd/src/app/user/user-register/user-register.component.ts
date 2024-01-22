import { Component, OnInit } from '@angular/core';
import { AbstractControl, AbstractControlOptions, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registrationForm!: FormGroup;
  /* If you're sure that the variable registrationForm will be assigned a value before it's used,
  you can use the definite assignment assertion (!) to tell TypeScript not to worry about the initialization.*/
  user: any = {};
  constructor(private fb: FormBuilder) { }

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
    this.user = Object.assign(this.user, this.registrationForm.value);
    this.addUser(this.user);
    this.registrationForm.reset();
  }

  addUser(user: any) {
    let users: any[] = [];
  
    if (localStorage.getItem('Users')) {
      const storedUsers = JSON.parse(localStorage.getItem('Users')!);
      if (Array.isArray(storedUsers)) {
        users = storedUsers;
      }
    }
  
    users = [user, ...users];
    localStorage.setItem('Users', JSON.stringify(users));
  }
  /* 1) localStorage: This is a web storage object in JavaScript that allows you to store key-value pairs locally in a user's web browser.
  The data stored using localStorage persists even when the user closes their browser or navigates away from the page.
  2) setItem('Users', JSON.stringify(users)): This line of code sets a key-value pair in the localStorage.
  The key is a string, in this case, 'Users', and the value is the stringified JSON representation of the users object. */
  

  // addUser(user: any){
  //   let users = [];
  //   if(localStorage.getItem('Users')){
  //     users = JSON.parse(localStorage.getItem('Users')!) || [];
  //     users = [user, ...users];
  //   }
  //   else{
  //     users = [user];
  //   }
  //   localStorage.setItem('Users', JSON.stringify(users));
  // }

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
