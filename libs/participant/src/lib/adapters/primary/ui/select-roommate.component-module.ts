import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectRoommateComponent } from './select-roommate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  declarations: [SelectRoommateComponent],
  providers: [],
  exports: [SelectRoommateComponent],
})
export class SelectRoommateComponentModule {}
