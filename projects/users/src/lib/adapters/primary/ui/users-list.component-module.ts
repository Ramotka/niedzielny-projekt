import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [UsersListComponent],
  	providers: [],
  	exports: [UsersListComponent] })
export class UsersListComponentModule {
}
