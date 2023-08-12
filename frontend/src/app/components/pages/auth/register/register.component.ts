import { Component, OnInit, ViewChild } from '@angular/core';
import { IControl } from 'src/app/components/core/components/form/deps/IControl';
import { TYPE_text, TYPE_password, TYPE_radio } from 'src/app/components/core/components/form/deps/control-types';
import { VALIDATION_MESSAGES } from 'src/app/components/core/components/form/deps/validation-messages';
import { ToastComponent } from 'src/app/components/core/components/toast/toast/toast.component';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild(ToastComponent) toastComponent: ToastComponent;
  config: IControl[] = [
    {
      type: TYPE_text,
      key: 'firstname', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(30) },
        ],
      visible: true,
      bsCols: 'col-md-8'
    },
    {
      type: TYPE_text,
      key: 'lastname', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '2', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(30) },
        ],
      visible: true,
      bsCols: 'col-md-8'
    },
    {
      type: TYPE_text,
      key: 'email', defaultValue: '',
      validators:
        [
          { key: 'email', value: 'email', message: VALIDATION_MESSAGES.email },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '45', message: VALIDATION_MESSAGES.maxlength(30) },
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
        ],
      visible: true,
      bsCols: 'col-md-8'
    },
    {
      type: TYPE_text,
      key: 'username', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
          { key: 'minLength', value: '5', message: VALIDATION_MESSAGES.minlength(5) },
          { key: 'maxLength', value: '30', message: VALIDATION_MESSAGES.maxlength(30) },
        ],
      visible: true,
      bsCols: 'col-md-8'
    },
    {
      type: TYPE_password,
      key: 'password', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
        ],
      visible: true,
      bsCols: 'col-md-8'
    },
    {
      type: TYPE_radio,
      key: 'admin', defaultValue: '',
      options: [
        { key: '  Yes', value: '0' },
        { key: '  No', value: '1' },
      ],
      validators:
        [
          { key: 'required', value: 'required', message: VALIDATION_MESSAGES.required },
        ],
      visible: true,
      bsCols: 'col-md-6'
    },
  ];
  constructor() { }
  ngOnInit(): void {
  }
  
  onSubmit(e) {
    const firstName = e.firstname;
    const lastName = e.lastname;
    const email = e.email;
    const username = e.username;
    const password = e.password;
    const isAdmin = e.admin;

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      username,
      password,
      is_admin: isAdmin
    };

    console.log('Payload: User Registration::');
    console.log(payload);
    this.toastComponent.show('User Registered Successfully.', true, false, false);
  }
}
