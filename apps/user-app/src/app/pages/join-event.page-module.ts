import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JoinEventPage } from './join-event.page';
import { FirebaseEventServiceModule } from '@event';
import { EventIdResolver } from 'libs/event/src/lib/adapters/primary/ui/event-id.resolver';
import { SetupEventDetailsPageModule } from './setup-event-details.page-module';
import { EventDetailsPageModule } from './event-details.page-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: JoinEventPage,
        resolve: {
          eventId: EventIdResolver,
        },
        children: [
          {
            path: '',
            loadChildren: () => EventDetailsPageModule,
          },
          {
            path: 'setup',
            loadChildren: () => SetupEventDetailsPageModule,
          },
        ],
      },
    ]),
    FirebaseEventServiceModule,
  ],
  declarations: [JoinEventPage],
  providers: [],
  exports: [],
})
export class JoinEventPageModule {}
