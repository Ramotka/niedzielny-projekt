import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseUserDetailsService } from './firebase-user-details.service';
import { ADDS_USER_DETAILS_DTO } from '../../../application/ports/secondary/adds-user-details.dto-port';
import { USER_SIGN_OUT_DTO } from '../../../application/ports/secondary/user-sign-out-dto-port';
import { GETS_ALL_USER_DETAILS_DTO } from '../../../application/ports/secondary/gets-all-user-details.dto-port';
import { REMOVES_USER_DETAILS_DTO } from '../../../application/ports/secondary/removes-user-details.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseUserDetailsService,
    { provide: ADDS_USER_DETAILS_DTO, useExisting: FirebaseUserDetailsService },
    { provide: USER_SIGN_OUT_DTO, useExisting: FirebaseUserDetailsService },
    {
      provide: GETS_ALL_USER_DETAILS_DTO,
      useExisting: FirebaseUserDetailsService,
    },
    {
      provide: REMOVES_USER_DETAILS_DTO,
      useExisting: FirebaseUserDetailsService,
    },
  ],
  exports: [],
})
export class FirebaseUserDetailsServiceModule {}
