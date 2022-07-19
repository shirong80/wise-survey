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

	constructor (private authService: AuthService) {}

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  signInHandler() {

    console.log('사인인핸들러 - 일단 click');


    let a = this.authService.login({mb_email: 'dd', mb_password: 'dd'})
    console.log(a, 'a');
    // .subscribe(
    //   data => {
    //     this.tokenStorage.saveToken(data.accessToken);
    //     this.tokenStorage.saveUser(data);

    //     this.isLoginFailed = false;
    //     this.isLoggedIn = true;
    //     this.roles = this.tokenStorage.getUser().roles;
    //     this.reloadPage();
    //   },
    //   err => {
    //     this.errorMessage = err.error.message;
    //     this.isLoginFailed = true;
    //   }
    // );
  }

}
