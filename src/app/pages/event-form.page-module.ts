import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventFormPage } from './event-form.page';
import { CreateEventComponentModule } from '@event';
import { FirebaseEventServiceModule } from '@event';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild([
      {
        path: '',
        component: EventFormPage,
      },
    ]),
    CreateEventComponentModule,
    FirebaseEventServiceModule,
  ],
  declarations: [EventFormPage],
  providers: [],
  exports: [],
})
export class EventFormPageModule {}
