import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserFormPage } from './user-form.page';
import { AddUserComponentModule } from 'libs/user-details/src/lib/adapters/primary/ui/add-user.component-module';
import { FirebaseUserDetailsServiceModule } from 'libs/user-details/src/lib/adapters/secondary/infrastructure/firebase-user-details.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserFormPage,
      },
    ]),
    AddUserComponentModule,
    FirebaseUserDetailsServiceModule,
  ],
  declarations: [UserFormPage],
  providers: [],
  exports: [],
})
export class UserFormPageModule {}
