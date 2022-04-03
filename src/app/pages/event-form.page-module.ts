import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventFormPage } from './event-form.page';
import { CreateEventComponentModule } from '../../../projects/event/src/lib/adapters/primary/ui/create-event.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EventFormPage,
        }
      ]),
  CreateEventComponentModule
],
  	declarations: [EventFormPage],
  	providers: [],
  	exports: [] })
export class EventFormPageModule {
}
