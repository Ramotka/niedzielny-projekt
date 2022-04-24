import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttractionsListComponent } from './attractions-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [AttractionsListComponent],
  	providers: [],
  	exports: [AttractionsListComponent] })
export class AttractionsListComponentModule {
}
