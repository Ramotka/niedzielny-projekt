import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EditEventPage } from './edit-event.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: EditEventPage,
        }
      ])],
  	declarations: [EditEventPage],
  	providers: [],
  	exports: [] })
export class EditEventPageModule {
}
