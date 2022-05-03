import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEventDetailsComponent } from './user-event-details.component';
import { RouterModule } from '@angular/router';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  imports: [CommonModule, RouterModule, ModalModule.forRoot()],
  declarations: [UserEventDetailsComponent],
  providers: [],
  exports: [UserEventDetailsComponent],
})
export class UserEventDetailsComponentModule {}
