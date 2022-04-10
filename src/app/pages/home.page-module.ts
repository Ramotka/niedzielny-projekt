import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { homePage } from './home.page';
import { EventsListComponentModule } from '../../../projects/event/src/lib/adapters/primary/ui/events-list.component-module';
import { FirebaseEventServiceModule } from '../../../projects/event/src/lib/adapters/secondary/infrastructure/firebase-event.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: homePage,
      },
    ]),
    EventsListComponentModule,
    FirebaseEventServiceModule,
  ],
  declarations: [homePage],
  providers: [],
  exports: [],
})
export class homePageModule {}
