import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietListComponent } from './diet-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [DietListComponent],
  providers: [],
  exports: [DietListComponent],
})
export class DietListComponentModule {}
