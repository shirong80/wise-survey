import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './containers/login.component';

// ngrx
// import { StoreModule } from '@ngrx/store';
// import { EffectsModule } from '@ngrx/effects';
// import * as fromModule from './reducers';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([]),
    // StoreModule.forFeature(fromModule.featureKey, fromModule.reducers),
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
})
export class LoginModule {}
