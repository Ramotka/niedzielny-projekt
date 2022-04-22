import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginPage } from './login.page';
import { FirebaseAuthServiceModule } from 'projects/user-auth/src/lib/adapters/secondary/infrastructure/firebase-auth.service-module';
import { UserComponentModule } from 'projects/user-auth/src/lib/adapters/primary/ui/user.component-module';

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
