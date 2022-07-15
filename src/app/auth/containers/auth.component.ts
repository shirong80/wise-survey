import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
// ngrx
// import { Store, select } from '@ngrx/store';
// import { AuthActions } from '../actions';
// import * as fromAuth from '../reducers';
// models
// import { ISignInFormCondition } from '../models';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {

	constructor () {}

  signInHandler() {
    console.log('사인인핸들러 - submitEvent')
  }

}
