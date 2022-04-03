import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsDietDtoPort } from '../../../application/ports/secondary/adds-diet.dto-port';
import { DietDTO } from '../../../application/ports/secondary/diet.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetsAllDietDtoPort } from '../../../application/ports/secondary/gets-all-diet.dto-port';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseDietService
  implements AddsDietDtoPort, GetsAllDietDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(diet: Partial<DietDTO>): void {
    this._client.collection('diets').add(diet);
  }

  getAll(criterion: Partial<DietDTO>): Observable<DietDTO[]> {
    return this._client
      .collection<DietDTO>('diets')
      .valueChanges({ idField: 'id' })
      .pipe(map((data: DietDTO[]) => filterByCriterion(data, criterion)));
  }
}
