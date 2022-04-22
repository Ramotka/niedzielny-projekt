import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [UserComponent],
  providers: [],
  exports: [UserComponent],
})
export class UserComponentModule {}
