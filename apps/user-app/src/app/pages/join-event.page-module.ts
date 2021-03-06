import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JoinEventPage } from './join-event.page';
import { FirebaseEventServiceModule } from '@event';
import { EventIdResolver } from 'libs/event/src/lib/adapters/primary/ui/event-id.resolver';
import { SetupEventDetailsPageModule } from './setup-event-details.page-module';
import { EventDetailsPageModule } from './event-details.page-module';
import { UserEmailResolver } from 'libs/user-auth/src/lib/adapters/primary/ui/user-email.resolver';
import { RoomTypePageModule } from './room-type.page-module';
import { RoommatePageModule } from './roommate.page-module';
import { ThankYouPageModule } from './thank-you.page-module';
import { RoomNumberPageModule } from './room-number.page-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: JoinEventPage,
        resolve: {
          eventId: EventIdResolver,
          userEmail: UserEmailResolver,
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
          {
            path: 'room-type',
            loadChildren: () => RoomTypePageModule,
          },
          {
            path: 'roommate',
            loadChildren: () => RoommatePageModule,
          },
          {
            path: 'room-number',
            loadChildren: () => RoomNumberPageModule,
          },
          {
            path: 'thank-you',
            loadChildren: () => ThankYouPageModule,
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
