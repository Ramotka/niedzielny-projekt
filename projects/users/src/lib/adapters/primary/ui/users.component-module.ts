import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';

@NgModule({ imports: [CommonModule],
  	declarations: [UsersComponent],
  	providers: [],
  	exports: [UsersComponent] })
export class UsersComponentModule {
}
