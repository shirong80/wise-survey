import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import * as _ from 'lodash';
// services
// import { AuthDataService } from '../../services';

@Component({
  selector: 'app-auth-form',
  templateUrl: './form.component.html',
})
export class AuthFormComponent implements OnInit {
  // @Output() submitEvent = new EventEmitter<any>();

  // form: FormGroup;

  // // state
  // private checkValid: boolean;

  // constructor(private readonly dataService: AuthDataService) {
  //   this.form = this.dataService.generateSignInForm();
  // }

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
