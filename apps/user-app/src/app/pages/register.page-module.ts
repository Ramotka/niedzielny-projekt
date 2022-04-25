import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RegisterPage } from './register.page';

// import { FirebaseAuthServiceModule } from '@user-auth';
import { CreateUserComponentModule } from 'projects/user-auth/src/lib/adapters/primary/ui/create-user.component-module';
import { FirebaseAuthServiceModule } from 'projects/user-auth/src/lib/adapters/secondary/infrastructure/firebase-auth.service-module';

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
