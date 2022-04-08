import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventDashboardPage } from './event-dashboard.page';
import { EventDashboardComponentModule } from '../../../projects/event/src/lib/adapters/primary/ui/event-dashboard.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EventDashboardPage,
        }
      ]),
  EventDashboardComponentModule
],
  	declarations: [EventDashboardPage],
  	providers: [],
  	exports: [] })
export class EventDashboardPageModule {
}
