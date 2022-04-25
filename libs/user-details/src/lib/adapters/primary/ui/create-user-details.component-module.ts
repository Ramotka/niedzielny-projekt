import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserDetailsComponent } from './create-user-details.component';

@NgModule({ imports: [CommonModule],
  	declarations: [CreateUserDetailsComponent],
  	providers: [],
  	exports: [CreateUserDetailsComponent] })
export class CreateUserDetailsComponentModule {
}
