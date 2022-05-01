import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectRoommateComponent } from './select-roommate.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SelectRoommateComponent],
  providers: [],
  exports: [SelectRoommateComponent],
})
export class SelectRoommateComponentModule {}
