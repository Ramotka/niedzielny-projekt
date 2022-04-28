import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import { FirebaseUserDetailsServiceModule } from 'libs/user-details/src/lib/adapters/secondary/infrastructure/firebase-user-details.service-module';
import { UserDetailsListComponentModule } from 'libs/user-details/src/lib/adapters/primary/ui/user-details-list.component-module';
import { SearchUserDetailsComponentModule } from 'libs/user-details/src';
import { InMemorySearchEmailStorageModule } from 'libs/user-details/src/lib/adapters/secondary/infrastructure/in-memory-search-email.storage-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UsersPage,
      },
    ]),
    FirebaseUserDetailsServiceModule,
    UserDetailsListComponentModule,
    SearchUserDetailsComponentModule,
    InMemorySearchEmailStorageModule,
  ],
  declarations: [UsersPage],
  providers: [],
  exports: [],
})
export class UsersPageModule {}
