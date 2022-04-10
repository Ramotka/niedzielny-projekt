import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDropdownListComponent } from './event-dropdown-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [EventDropdownListComponent],
  	providers: [],
  	exports: [EventDropdownListComponent] })
export class EventDropdownListComponentModule {
}
