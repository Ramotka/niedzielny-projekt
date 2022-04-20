import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseUsersService } from './firebase-users.service';
import { ADDS_USER_DTO } from '../../../application/ports/secondary/adds-user.dto-port';
import { GETS_ALL_USER_DTO } from '../../../application/ports/secondary/gets-all-user.dto-port';
import { REMOVES_USER_DTO } from '../../../application/ports/secondary/removes-user.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseUsersService,
    { provide: ADDS_USER_DTO, useExisting: FirebaseUsersService },
    { provide: GETS_ALL_USER_DTO, useExisting: FirebaseUsersService },
    { provide: REMOVES_USER_DTO, useExisting: FirebaseUsersService },
  ],
  exports: [],
})
export class FirebaseUsersServiceModule {}
