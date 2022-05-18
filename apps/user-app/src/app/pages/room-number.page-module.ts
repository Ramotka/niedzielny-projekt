import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomNumberPage } from './room-number.page';
import {
  FirebaseRoomServiceModule,
  SelectRoomNumberComponentModule,
} from '@room';
import { FirebaseParticipantServiceModule } from '@participant';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoomNumberPage,
      },
    ]),
    SelectRoomNumberComponentModule,
    FirebaseRoomServiceModule,
    FirebaseParticipantServiceModule,
  ],
  declarations: [RoomNumberPage],
  providers: [],
  exports: [],
})
export class RoomNumberPageModule {}
