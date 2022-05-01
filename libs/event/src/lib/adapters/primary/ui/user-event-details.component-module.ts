import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEventDetailsComponent } from './user-event-details.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [UserEventDetailsComponent],
  providers: [],
  exports: [UserEventDetailsComponent],
})
export class UserEventDetailsComponentModule {}
