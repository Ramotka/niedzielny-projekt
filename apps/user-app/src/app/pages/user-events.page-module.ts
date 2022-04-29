import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserEventsPage } from './user-events.page';
import { UserEventsListComponentModule } from 'libs/event/src/lib/adapters/primary/ui/user-events-list.component-module';
import { FirebaseUserDetailsServiceModule } from 'libs/user-details/src/lib/adapters/secondary/infrastructure/firebase-user-details.service-module';
import { FirebaseParticipantServiceModule } from '@participant';
import { FirebaseEventServiceModule } from '@event';
import { InMemoryContextStorageModule } from '@core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: UserEventsPage,
        children: [],
      },
    ]),
    UserEventsListComponentModule,
    FirebaseUserDetailsServiceModule,
    FirebaseParticipantServiceModule,
    FirebaseEventServiceModule,
    InMemoryContextStorageModule,
  ],
  declarations: [UserEventsPage],
  providers: [],
  exports: [],
})
export class UserEventsPageModule {}
