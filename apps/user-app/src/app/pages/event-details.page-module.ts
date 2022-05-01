import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventDetailsPage } from './event-details.page';
import { UserEventDetailsComponentModule } from 'libs/event/src/lib/adapters/primary/ui/user-event-details.component-module';

@NgModule({
  imports: [
    CommonModule,
    UserEventDetailsComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventDetailsPage,
      },
    ]),
  ],
  declarations: [EventDetailsPage],
  providers: [],
  exports: [],
})
export class EventDetailsPageModule {}
