import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchUserDetailsComponent } from './search-user-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [SearchUserDetailsComponent],
  	providers: [],
  	exports: [SearchUserDetailsComponent] })
export class SearchUserDetailsComponentModule {
}
