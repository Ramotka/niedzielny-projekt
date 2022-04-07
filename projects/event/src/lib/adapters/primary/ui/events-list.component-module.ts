import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [EventsListComponent],
  providers: [],
  exports: [EventsListComponent],
})
export class EventsListComponentModule {}
