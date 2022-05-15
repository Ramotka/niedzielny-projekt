import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseRoomService } from './firebase-room.service';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [FirebaseRoomService],
  exports: [],
})
export class FirebaseRoomServiceModule {}
