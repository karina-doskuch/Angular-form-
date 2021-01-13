import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  userForm: FormGroup;

  user: User = new User(1, null, null, null, null, null);
  roles: string[] = ['Guest', 'Moderator', 'Administrator'];

  formErrors = { login: '', password: '', email: '', age: '', role: '' };

  validationMessages = {
    login: {
      required: 'Имя обязательно',
      minlength: 'Имя должно содержать не менее 4 символов',
      maxlength: 'Имя должно содержать не более 15 символов'
    },
    password: {
      required: 'Пароль обязателен',
      minlength: 'Пароль  должен содержать не менее 7 символов',
      maxlength: 'Пароль  должен содержать не более 25 символов'
    },
    email: {
      required: 'Email обязателен',
      pattern: 'Неправильный формат email адреса'
    },
    age: {
      required: 'Возраст  обязателен',
      pattern: 'Значение должно быть целым числом'
    },
    role: {
    required: 'Обязательное поле'
    }
  };

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
  this.buildForm();
  }

  buildForm(): void {
    this.userForm = this.fb.group( {
      login: [this.user.login, [Validators.required, Validators.minLength(4), Validators.maxLength(15)]],
      password: [this.user.password, [Validators.required, Validators.minLength(7), Validators.maxLength(25)]],
      email: [this.user.email, [Validators.required, Validators.pattern('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$')]],
      age: [this.user.age, [Validators.required, Validators.pattern('^\\d+')]],
      role: [this.user.role, Validators.required],
    });

    this.userForm.valueChanges.subscribe( _ => this.onValueChanges());
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
          this.formErrors[field] += message[key];
        }
      }
    }
  }

  onSubmit(form): void {
    console.log('isvalid:', form.valid);
  }
}


 



 

 



 

  
