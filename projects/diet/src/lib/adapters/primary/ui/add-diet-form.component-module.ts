import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDietFormComponent } from './add-diet-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AddDietFormComponent],
  providers: [],
  exports: [AddDietFormComponent],
})
export class AddDietFormComponentModule {}
