import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventHomePage } from './event-home.page';
import { EventDashboardComponentModule } from 'libs//event/src/lib/adapters/primary/ui/event-dashboard.component-module';
import { EventIdResolverModule, FirebaseEventServiceModule } from '@event';
import { DietPageModule } from './diet.page-module';
import { EventIdResolver } from 'libs/event/src/lib/adapters/primary/ui/event-id.resolver';
import { NavigationComponentModule } from 'libs//navigation/src/lib/adapters/primary/ui/navigation.component-module';
import { FirebaseNavLinkServiceModule } from 'libs//navigation/src/lib/adapters/secondary/infrastructure/firebase-nav-link.service-module';
import { EventDashboardPageModule } from './event-dashboard.page-module';
import { TransportPageModule } from './transport.page-module';
import { EditEventPageModule } from './edit-event.page-module';
import { AttractionsPageModule } from './attractions.page-module';
import { UsersPageModule } from './users.page-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventHomePage,
        resolve: {
          eventId: EventIdResolver,
        },
        children: [
          {
            path: '',
            loadChildren: () => EventDashboardPageModule,
          },
          {
            path: 'diet',
            loadChildren: () => DietPageModule,
          },
          {
            path: 'dashboard',
            loadChildren: () => EventDashboardPageModule,
          },
          {
            path: 'transport',
            loadChildren: () => TransportPageModule,
          },
          {
            path: 'edit-event',
            loadChildren: () => EditEventPageModule,
          },
          {
            path: 'attractions',
            loadChildren: () => AttractionsPageModule,
          },
          {
            path: 'users',
            loadChildren: () => UsersPageModule,
          },
        ],
      },
    ]),
    EventDashboardComponentModule,
    FirebaseEventServiceModule,
    EventIdResolverModule,
    NavigationComponentModule,
    FirebaseNavLinkServiceModule,
  ],
  declarations: [EventHomePage],
  providers: [],
  exports: [],
})
export class EventHomePageModule {}
