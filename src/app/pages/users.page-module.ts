import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import { AddUserComponentModule } from '../../../projects/users/src/lib/adapters/primary/ui/add-user.component-module';
import { UsersListComponentModule } from '../../../projects/users/src/lib/adapters/primary/ui/users-list.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersPage,
      },
    ]),
    AddUserComponentModule,
    UsersListComponentModule
  ],
  declarations: [UsersPage],
  providers: [],
  exports: [],
})
export class UsersPageModule {}
