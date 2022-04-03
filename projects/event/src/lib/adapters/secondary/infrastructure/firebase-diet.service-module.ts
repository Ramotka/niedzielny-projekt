import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FirebaseDietService } from './firebase-diet.service';
import { ADDS_DIET_DTO } from '../../../application/ports/secondary/adds-diet.dto-port';
import { GETS_ALL_DIET_DTO } from '../../../application/ports/secondary/gets-all-diet.dto-port';

@NgModule({
  imports: [AngularFirestoreModule],
  declarations: [],
  providers: [
    FirebaseDietService,
    { provide: ADDS_DIET_DTO, useExisting: FirebaseDietService },
    { provide: GETS_ALL_DIET_DTO, useExisting: FirebaseDietService },
  ],
  exports: [],
})
export class FirebaseDietServiceModule {}
