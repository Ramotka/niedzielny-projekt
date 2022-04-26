import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsListComponent } from './user-details-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [UserDetailsListComponent],
  	providers: [],
  	exports: [UserDetailsListComponent] })
export class UserDetailsListComponentModule {
}
