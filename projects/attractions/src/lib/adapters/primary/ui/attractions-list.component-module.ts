import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttractionsListComponent } from './attractions-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [AttractionsListComponent],
  	providers: [],
  	exports: [AttractionsListComponent] })
export class AttractionsListComponentModule {
}
