import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAttractionFormComponent } from './add-attraction-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddAttractionFormComponent],
  	providers: [],
  	exports: [AddAttractionFormComponent] })
export class AddAttractionFormComponentModule {
}
