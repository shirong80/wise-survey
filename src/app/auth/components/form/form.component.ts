import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import * as _ from 'lodash';
// services
import { AuthService } from '../../services/auth.service';
import { ILoginRq } from '../../models';

@Component({
  selector: 'app-auth-form',
  templateUrl: './form.component.html',
})
export class AuthFormComponent implements OnInit {
  // @Output() submitEvent = new EventEmitter<any>();

  // form: FormGroup;

  // // state
  // private checkValid: boolean;

  model :ILoginRq = {mb_email:'aa', mb_password:'bb'};

  constructor(private readonly authService: AuthService) {

  }




  ngOnInit() {}

  // onSubmit() {
  //   if (this.form.invalid) {
  //     this.checkValid = true;
  //     return;
  //   }

  //   this.submitEvent.emit(this.form.value);
  //   this.checkValid = false;
  // }

  // //#region Public Utilities
  // checkIsInvalid(controlPath: (string | number)[] | string) {
  //   return this.checkValid && this.form.get(controlPath) && this.form.get(controlPath).invalid;
  // }
  // //#endregion
}
