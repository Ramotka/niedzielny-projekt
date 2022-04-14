import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllAttractionDtoPort } from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import { AttractionDTO } from '../../../application/ports/secondary/attraction.dto';
import { filterByCriterion } from '@lowgular/shared';
import { AddsAttractionDtoPort } from '../../../application/ports/secondary/adds-attraction.dto-port';
import { SetsAttractionDtoPort } from '../../../application/ports/secondary/sets-attraction.dto-port';
import { RemovesAttractionDtoPort } from '../../../application/ports/secondary/removes-attraction.dto-port';

@Injectable()
export class FirebaseAttractionsService
  implements
    GetsAllAttractionDtoPort,
    AddsAttractionDtoPort,
    SetsAttractionDtoPort,
    RemovesAttractionDtoPort
{
  constructor(private _client: AngularFirestore) {}

  getAll(criterion: Partial<AttractionDTO>): Observable<AttractionDTO[]> {
    return this._client
      .collection<AttractionDTO>('attractions')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: AttractionDTO[]) => filterByCriterion(data, criterion)));
  }

  add(attraction: Partial<AttractionDTO>): void {
    this._client.collection('attractions').add(attraction);
  }

  set(attraction: Partial<AttractionDTO>): void {
    this._client.doc('attractions/' + attraction.id).update(attraction);
  }

  remove(id: string): void {
    this._client.doc('attractions/' + id).delete();
  }
}
