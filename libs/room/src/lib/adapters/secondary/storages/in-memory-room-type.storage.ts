import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, of } from 'rxjs';
import { map, skip } from 'rxjs/operators';
import { SelectsRoomTypeContextPort } from '../../../application/ports/secondary/context/selects-room-type.context-port';
import { SetsStateRoomTypeContextPort } from '../../../application/ports/secondary/context/sets-state-room-type.context-port';
import { RoomTypeContext } from '../../../application/ports/secondary/context/room-type.context';

@Injectable()
export class InMemoryRoomTypeStorage implements SelectsRoomTypeContextPort, SetsStateRoomTypeContextPort {
  private _subject: Subject<Partial<RoomTypeContext>> = new BehaviorSubject<Partial<RoomTypeContext>>({});

  select(): Observable<Partial<RoomTypeContext>> {
    return this._subject.asObservable().pipe(skip(1));
  }

  setState(state: RoomTypeContext): Observable<void> {
    return of(this._subject.next(state)).pipe(map(() => void 0));
  }
}
