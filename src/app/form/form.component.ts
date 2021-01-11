import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, AfterViewInit {

  roles: string[] = ['Guest', 'Moderator', 'Administrator'];
  model: User = new User(1, '', '', null);

  formErrors = { name: '', age: '' };

  validationMessages = {
    name: {
      required: 'Name is required.',
      minlength: 'Name must be at least 4 characters long.'
    },
    age: {
      required: 'Age is required.'
    }
  };

  @ViewChild('userForm ') userForm: NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.userForm.valueChanges.subscribe(_ => this.onValueChanges());
  }

  onValueChanges(): void {
    if (!this.userForm) { 
      return; 
    }

    const form = this.userForm.form;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);

      if (control && control.dirty && !control.invalid) {
        const message = this.validationMessages[field];

        for (const key in control.errors) {
          this.formErrors[field] += message[key];
        }
      }
    }
  }

  onSubmit(): void {
    console.log('Form submitted');
  }
}
