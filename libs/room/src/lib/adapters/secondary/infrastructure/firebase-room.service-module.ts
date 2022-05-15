import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseRoomService } from './firebase-room.service';
import { ADDS_ROOM_DTO } from '../../../application/ports/secondary/adds-room.dto-port';
import { GETS_ALL_ROOM_DTO } from '../../../application/ports/secondary/gets-all-room.dto-port';
import { SETS_ROOM_DTO } from '../../../application/ports/secondary/sets-room.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseRoomService,
    { provide: ADDS_ROOM_DTO, useExisting: FirebaseRoomService },
    { provide: GETS_ALL_ROOM_DTO, useExisting: FirebaseRoomService },
    { provide: SETS_ROOM_DTO, useExisting: FirebaseRoomService },
  ],
  exports: [],
})
export class FirebaseRoomServiceModule {}
