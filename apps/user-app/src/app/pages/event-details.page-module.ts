import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventDetailsPage } from './event-details.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EventDetailsPage,
        }
      ])],
  	declarations: [EventDetailsPage],
  	providers: [],
  	exports: [] })
export class EventDetailsPageModule {
}
