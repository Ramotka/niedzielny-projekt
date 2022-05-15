import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseRoomService } from './firebase-room.service';
import { ADDS_ROOM_DTO } from '../../../application/ports/secondary/adds-room.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseRoomService,
    { provide: ADDS_ROOM_DTO, useExisting: FirebaseRoomService },
  ],
  exports: [],
})
export class FirebaseRoomServiceModule {}
