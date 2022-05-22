import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlowPage } from './flow.page';
import { UserEventsPageModule } from './user-events.page-module';
import { UserEmailResolver } from 'libs/user-auth/src/lib/adapters/primary/ui/user-email.resolver';
import { JoinEventPageModule } from './join-event.page-module';
import { UserPermissionGuard } from 'libs/participant/src/lib/adapters/primary/ui/user-permission.guard';
import { EventIdResolver } from 'libs/event/src/lib/adapters/primary/ui/event-id.resolver';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: FlowPage,
        resolve: {
          userEmail: UserEmailResolver,
        },
        children: [
          {
            path: '',
            loadChildren: () => UserEventsPageModule,
          },
          {
            path: ':eventId',
            loadChildren: () => JoinEventPageModule,
            canActivate: [UserPermissionGuard],
            resolve: {
              eventId: EventIdResolver,
            },
          },
        ],
      },
    ]),
  ],
  declarations: [FlowPage],
  providers: [],
  exports: [],
})
export class FlowPageModule {}
