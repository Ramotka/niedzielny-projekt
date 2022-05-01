import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectStandardOptionsComponent } from './select-standard-options.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SelectStandardOptionsComponent],
  providers: [],
  exports: [SelectStandardOptionsComponent],
})
export class SelectStandardOptionsComponentModule {}
