import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [EventsListComponent],
  providers: [],
  exports: [EventsListComponent],
})
export class EventsListComponentModule {}
