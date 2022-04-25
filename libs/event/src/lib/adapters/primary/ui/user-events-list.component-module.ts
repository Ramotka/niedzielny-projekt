import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEventsListComponent } from './user-events-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UserEventsListComponent],
  providers: [],
  exports: [UserEventsListComponent],
})
export class UserEventsListComponentModule {}
