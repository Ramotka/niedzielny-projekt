import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsListPage } from './events-list.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EventsListPage,
        }
      ])],
  	declarations: [EventsListPage],
  	providers: [],
  	exports: [] })
export class EventsListPageModule {
}
