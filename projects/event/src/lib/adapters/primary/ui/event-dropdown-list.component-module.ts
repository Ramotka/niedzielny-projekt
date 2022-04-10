import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventDropdownListComponent } from './event-dropdown-list.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, BsDropdownModule.forRoot()],
  declarations: [EventDropdownListComponent],
  providers: [],
  exports: [EventDropdownListComponent],
})
export class EventDropdownListComponentModule {}
