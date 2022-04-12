import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchEventComponent } from './search-event.component';

@NgModule({ imports: [CommonModule],
  	declarations: [SearchEventComponent],
  	providers: [],
  	exports: [SearchEventComponent] })
export class SearchEventComponentModule {
}
