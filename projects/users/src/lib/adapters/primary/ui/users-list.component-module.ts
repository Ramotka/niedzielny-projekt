import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [UsersListComponent],
  	providers: [],
  	exports: [UsersListComponent] })
export class UsersListComponentModule {
}