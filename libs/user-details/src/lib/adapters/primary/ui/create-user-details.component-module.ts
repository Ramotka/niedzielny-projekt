import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserDetailsComponent } from './create-user-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [CreateUserDetailsComponent],
  providers: [],
  exports: [CreateUserDetailsComponent],
})
export class CreateUserDetailsComponentModule {}
