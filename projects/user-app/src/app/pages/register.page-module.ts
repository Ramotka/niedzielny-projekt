import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterPage } from './register.page';
import {
  CreateUserComponentModule,
  FirebaseAuthServiceModule,
} from '@user-auth';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RegisterPage,
      },
    ]),
    CreateUserComponentModule,
    FirebaseAuthServiceModule,
  ],
  declarations: [RegisterPage],
  providers: [],
  exports: [],
})
export class RegisterPageModule {}
