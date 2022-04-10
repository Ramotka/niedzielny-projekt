import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsListComponent } from './events-list.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [EventsListComponent],
  providers: [],
  exports: [EventsListComponent],
})
export class EventsListComponentModule {}
