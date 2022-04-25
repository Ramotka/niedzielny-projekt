import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserDetailsPage } from './user-details.page';
import { CreateUserDetailsComponentModule } from 'libs/user-details/src/lib/adapters/primary/ui/create-user-details.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserDetailsPage,
      },
    ]),
    CreateUserDetailsComponentModule,
  ],
  declarations: [UserDetailsPage],
  providers: [],
  exports: [],
})
export class UserDetailsPageModule {}
