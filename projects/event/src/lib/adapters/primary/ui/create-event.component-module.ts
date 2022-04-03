import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './create-event.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [CreateEventComponent],
  	providers: [],
  	exports: [CreateEventComponent] })
export class CreateEventComponentModule {
}
