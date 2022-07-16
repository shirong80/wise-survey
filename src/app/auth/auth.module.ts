import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthComponent } from './containers/index';
import { AuthFormComponent } from './components/index';

const CONTAINERS = [AuthComponent];
const COMPONENTS = [AuthFormComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  declarations: [CONTAINERS, COMPONENTS],
  exports: [CONTAINERS],
  providers: [],
})
export class AuthModule {}
