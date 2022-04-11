import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditEventPage } from './edit-event.page';
import { EditEventComponentModule } from '../../../projects/event/src/lib/adapters/primary/ui/edit-event.component-module';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EditEventPage,
        }
      ]),
  EditEventComponentModule
],
  	declarations: [EditEventPage],
  	providers: [],
  	exports: [] })
export class EditEventPageModule {
}
