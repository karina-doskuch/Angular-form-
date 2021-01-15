import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';
import { emailValidator, rangeValidator,observableUrlValidator } from '../custom-validators'
import { FORM_ERRORS, FORM_PLACEHOLDERS, FORM_SUCCESS, ROLES, VALIDATION_MESSAGES } from '../mock-data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;
  placeholders = FORM_PLACEHOLDERS;
  formSuccses = FORM_SUCCESS;
  formErrors = FORM_ERRORS;
  validationMessages = VALIDATION_MESSAGES;
  roles = ROLES;
  private user: User;

  login: AbstractControl;
  password: AbstractControl;
  email: AbstractControl;
  age:  AbstractControl;
  site: AbstractControl;
  role: AbstractControl;
 
  constructor(private fb: FormBuilder) { 
    this.user = new User(1, null, null, null, null, null, null);
  }

  ngOnInit(): void {
    this.buildForm();
    this.createControls();
  }

  buildForm(): void {
    this.userForm = this.fb.group( {
      login: [this.user.login, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [this.user.email, [Validators.required, emailValidator]],
      age: [this.user.age, [Validators.required, rangeValidator(1, 122)]],
      site: [this.user.site, [Validators.required], [observableUrlValidator]],
      role: [this.user.role, Validators.required]
    });

    this.userForm.valueChanges.subscribe( _ => this.onValueChanges());
  }

  createControls(): void {
    this.login = this.userForm.controls.login;
    this.password = this.userForm.controls.password;
    this.email = this.userForm.controls.email;
    this.age = this.userForm.controls.age;
    this.site = this.userForm.controls.site;
    this.role = this.userForm.controls.role;
  }

  onValueChanges(): void {
    if (!this.userForm) { 
      return; 
    }

    const form = this.userForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && control.invalid) {
        const message = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += message[key] + ' ';
        }
      }
    }
  }

  onSubmit(form): void {
    console.log('isvalid:', form.valid);
  }
}


 



 

 



 

  
