import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventsListPage } from './events-list.page';
import { EventsListComponentModule } from '../../../projects/event/src/lib/adapters/primary/ui/events-list.component-module';
import { FirebaseEventServiceModule } from '@event';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventsListPage,
      },
    ]),
    EventsListComponentModule,
    FirebaseEventServiceModule,
  ],
  declarations: [EventsListPage],
  providers: [],
  exports: [],
})
export class EventsListPageModule {}
