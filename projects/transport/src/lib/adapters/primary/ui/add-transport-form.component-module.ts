import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTransportFormComponent } from './add-transport-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AddTransportFormComponent],
  	providers: [],
  	exports: [AddTransportFormComponent] })
export class AddTransportFormComponentModule {
}
