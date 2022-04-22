import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { FirebaseAuthServiceModule, UserComponentModule } from '@user-auth';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      {
        path: '',
        component: LoginPage,
      },
    ]),
    UserComponentModule,
    FirebaseAuthServiceModule,
  ],
  declarations: [LoginPage],
  providers: [],
  exports: [],
})
export class LoginPageModule {}
