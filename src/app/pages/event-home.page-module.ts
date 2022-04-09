import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventHomePage } from './event-home.page';
import { EventDashboardComponentModule } from '../../../projects/event/src/lib/adapters/primary/ui/event-dashboard.component-module';
import { EventIdResolverModule, FirebaseEventServiceModule } from '@event';
import { DietPageModule } from './diet.page-module';
import { EventIdResolver } from 'projects/event/src/lib/adapters/primary/ui/event-id.resolver';
import { NavigationComponentModule } from '../../../projects/navigation/src/lib/adapters/primary/ui/navigation.component-module';
import { FirebaseNavLinkServiceModule } from '../../../projects/navigation/src/lib/adapters/secondary/infrastructure/firebase-nav-link.service-module';

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
            path: 'diet',
            loadChildren: () => DietPageModule,
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
