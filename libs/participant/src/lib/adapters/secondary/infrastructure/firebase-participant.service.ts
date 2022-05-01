import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AddsParticipantDtoPort } from '../../../application/ports/secondary/adds-participant.dto-port';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { GetsAllParticipantDtoPort } from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { filterByCriterion } from '@lowgular/shared';
import { RemovesParticipantDtoPort } from '../../../application/ports/secondary/removes-participant.dto-port';
import { SetsParticipantDtoPort } from '../../../application/ports/secondary/sets-participant.dto-port';
import { GetsOneParticipantDtoPort } from '../../../application/ports/secondary/gets-one-participant.dto-port';

const mapToOneObject = (par: ParticipantDTO[]) => {
  return {
    id: par[0].id,
    name: par[0].name,
    lastName: par[0].lastName,
    email: par[0].email,
    eventId: par[0].eventId,
    dietId: par[0].dietId,
    transportId: par[0].transportId,
    attractionId: par[0].attractionId,
    roomType: par[0].roomType,
  };
};

@Injectable()
export class FirebaseParticipantService
  implements
    AddsParticipantDtoPort,
    GetsAllParticipantDtoPort,
    RemovesParticipantDtoPort,
    SetsParticipantDtoPort,
    GetsOneParticipantDtoPort
{
  constructor(private _client: AngularFirestore) {}

  add(participant: Partial<ParticipantDTO>): void {
    this._client.collection('participants').add(participant);
  }

  getAll(criterion: Partial<ParticipantDTO>): Observable<ParticipantDTO[]> {
    return this._client
      .collection<ParticipantDTO>('participants')
      .valueChanges({ idField: 'id' })
      .pipe(
        map((data: ParticipantDTO[]) =>
          criterion && criterion.email
            ? data.filter((participant) =>
                participant.email
                  .toLowerCase()
                  .includes(criterion?.email?.toLowerCase() as string)
              )
            : data
        )
      );
  }

  remove(id: string): void {
    this._client.doc('participants/' + id).delete();
  }

  set(participant: Partial<ParticipantDTO>): void {
    this._client.doc('participants/' + participant.id).update(participant);
  }

  getOne(criterion: Partial<ParticipantDTO>): Observable<ParticipantDTO> {
    return this.getAll(criterion).pipe(
      map((data: ParticipantDTO[]) =>
        data.filter(
          (participant) => participant.eventId === (criterion.eventId as string)
        )
      ),
      map((data) => mapToOneObject(data))
    );
  }
}
