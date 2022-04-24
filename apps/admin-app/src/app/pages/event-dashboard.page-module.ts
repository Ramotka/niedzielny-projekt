import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventDashboardPage } from './event-dashboard.page';
import { EventDashboardComponentModule } from 'projects//event/src/lib/adapters/primary/ui/event-dashboard.component-module';
import { FirebaseEventServiceModule } from 'projects//event/src/lib/adapters/secondary/infrastructure/firebase-event.service-module';
import { EventDropdownListComponentModule } from 'projects//event/src/lib/adapters/primary/ui/event-dropdown-list.component-module';
import { DietCardComponentModule } from 'projects//diet/src/lib/adapters/primary/ui/diet-card.component-module';
import { FirebaseDietServiceModule } from '@diet';
import { DietListComponentModule } from 'projects//diet/src/lib/adapters/primary/ui/diet-list.component-module';
import { EventsListComponentModule } from 'projects//event/src/lib/adapters/primary/ui/events-list.component-module';
import { TransportCardComponentModule } from 'projects//transport/src/lib/adapters/primary/ui/transport-card.component-module';
import { FirebaseTransportServiceModule } from 'projects//transport/src/lib/adapters/secondary/infrastructure/firebase-transport.service-module';
import { AttractionsCardComponentModule } from 'projects//attractions/src/lib/adapters/primary/ui/attractions-card.component-module';
import { FirebaseAttractionsServiceModule } from '@attractions';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventDashboardPage,
      },
    ]),
    EventDashboardComponentModule,
    FirebaseEventServiceModule,
    EventDropdownListComponentModule,
    DietCardComponentModule,
    FirebaseDietServiceModule,
    TransportCardComponentModule,
    FirebaseTransportServiceModule,
    AttractionsCardComponentModule,
    FirebaseAttractionsServiceModule,
  ],
  declarations: [EventDashboardPage],
  providers: [],
  exports: [],
})
export class EventDashboardPageModule {}
