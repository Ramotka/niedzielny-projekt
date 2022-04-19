import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UsersPage } from './users.page';
import { UsersComponentModule } from '../../../projects/users/src/lib/adapters/primary/ui/users.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: UsersPage,
        }
      ]),
  UsersComponentModule
],
  	declarations: [UsersPage],
  	providers: [],
  	exports: [] })
export class UsersPageModule {
}
