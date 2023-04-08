import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
interface IValidators {
  key: string,
  value: string,
  message: string
}
interface IControl {
  key: string,
  defaultValue: string,
  validators: IValidators[]
}
@Component({
  selector: 'core-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() submitted = new EventEmitter();
  config: IControl[] = [
    {
      key: 'username', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: 'Username field is required. Please enter a value.' },
          { key: 'email', value: 'email', message: 'Invalid email format. Please check your email and try again' },
          { key: 'minLength', value: '5', message: 'Username should be atleast minimun 5 characters long.' },
          { key: 'maxLength', value: '10', message: 'Username should be atleast maximun 5 characters long.' },
          { key: 'pattern', value: 'rehan@gmail.com', message: 'Sorry, the input provided is not valid. Please revise your input to match the required format' }
        ]
    },
    {
      key: 'password', defaultValue: '',
      validators:
        [
          { key: 'required', value: 'required', message: 'Password should be required' },
          { key: 'email', value: 'email', message: 'email' }
        ]
    },
  ];
  form: FormGroup;
  constructor() { }
  ngOnInit() {
    let controls = {};
    for (let i = 0; i < this.config.length; i++) {
      let control = this.config[i];
      let controlValidators: ValidatorFn[] = [];
      for (let j = 0; j < control.validators.length; j++) {
        const validator = control.validators[j];
        if (validator.key === 'required') controlValidators.push(Validators.required);
        else if (validator.key === 'maxLength') controlValidators.push(Validators.maxLength(+validator.value));
        else if (validator.key === 'minLength') controlValidators.push(Validators.minLength(+validator.value));
        else if (validator.key === 'email') controlValidators.push(Validators.email);
        else if (validator.key === 'pattern') controlValidators.push(Validators.pattern(validator.value));
        else { }
      }
      controls[control.key] = new FormControl('', controlValidators)
    }
    this.form = new FormGroup(controls);
  }
  submit(e) {
    this.submitted.emit(e.value);
  }
}