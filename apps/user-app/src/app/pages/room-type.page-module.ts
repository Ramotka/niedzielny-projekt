import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomTypePage } from './room-type.page';
import {
  FirebaseParticipantServiceModule,
  SelectRoomTypeComponentModule,
} from '@participant';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoomTypePage,
      },
    ]),
    FirebaseParticipantServiceModule,
    SelectRoomTypeComponentModule,
  ],
  declarations: [RoomTypePage],
  providers: [],
  exports: [],
})
export class RoomTypePageModule {}
