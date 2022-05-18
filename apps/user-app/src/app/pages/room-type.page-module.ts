import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomTypePage } from './room-type.page';
import { FirebaseParticipantServiceModule } from '@participant';
import { FirebaseRoomServiceModule, SelectRoomComponentModule } from '@room';

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
    SelectRoomComponentModule,
    FirebaseRoomServiceModule,
  ],
  declarations: [RoomTypePage],
  providers: [],
  exports: [],
})
export class RoomTypePageModule {}
