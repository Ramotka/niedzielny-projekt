import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseAttractionsService } from './firebase-attractions.service';
import { GETS_ALL_ATTRACTION_DTO } from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import { ADDS_ATTRACTION_DTO } from '../../../application/ports/secondary/adds-attraction.dto-port';
import { SETS_ATTRACTION_DTO } from '../../../application/ports/secondary/sets-attraction.dto-port';
import { REMOVES_ATTRACTION_DTO } from '../../../application/ports/secondary/removes-attraction.dto-port';

@NgModule({ imports: [AngularFirestoreModule],
  	declarations: [],
  	providers: [FirebaseAttractionsService, { provide: GETS_ALL_ATTRACTION_DTO, useExisting: FirebaseAttractionsService }, { provide: ADDS_ATTRACTION_DTO, useExisting: FirebaseAttractionsService }, { provide: SETS_ATTRACTION_DTO, useExisting: FirebaseAttractionsService }, { provide: REMOVES_ATTRACTION_DTO, useExisting: FirebaseAttractionsService }],
  	exports: [] })
export class FirebaseAttractionsServiceModule {
}
