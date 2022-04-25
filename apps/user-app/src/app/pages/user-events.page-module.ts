import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserEventsPage } from './user-events.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: UserEventsPage,
        }
      ])],
  	declarations: [UserEventsPage],
  	providers: [],
  	exports: [] })
export class UserEventsPageModule {
}
