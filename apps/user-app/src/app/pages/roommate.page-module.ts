import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoommatePage } from './roommate.page';
import {
  FirebaseParticipantServiceModule,
  RoommateInvitationsComponentModule,
  SelectRoommateComponentModule,
} from '@participant';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoommatePage,
      },
    ]),
    FirebaseParticipantServiceModule,
    SelectRoommateComponentModule,
    RoommateInvitationsComponentModule,
  ],
  declarations: [RoommatePage],
  providers: [],
  exports: [],
})
export class RoommatePageModule {}
