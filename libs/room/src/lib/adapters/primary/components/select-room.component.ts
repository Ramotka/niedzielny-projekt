import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { RoomDTO } from '../../../application/ports/secondary/room.dto';
import {
  GETS_ALL_ROOM_DTO,
  GetsAllRoomDtoPort,
} from '../../../application/ports/secondary/gets-all-room.dto-port';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import {
  SetsParticipantDtoPort,
  SETS_PARTICIPANT_DTO,
} from 'libs/participant/src/lib/application/ports/secondary/sets-participant.dto-port';
import {
  GetsOneParticipantDtoPort,
  GETS_ONE_PARTICIPANT_DTO,
} from 'libs/participant/src/lib/application/ports/secondary/gets-one-participant.dto-port';
import { ParticipantDTO } from 'libs/participant/src/lib/application/ports/secondary/participant.dto';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'lib-select-room',
  templateUrl: './select-room.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectRoomComponent {
  availableRooms$: Observable<RoomDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllRoomDto.getAll({ eventId: data.eventId })
      ),
      map((data) =>
        data.filter((room) => room.guests.length !== room.capacity)
      ),
      // distinct(({ capacity }) => capacity),
      tap((test) => console.log(test))
    );

  participant$: Observable<ParticipantDTO> = combineLatest([
    this._contextDtoStoragePort.asObservable(),
    this._currentUserDtoStoragePort.asObservable(),
  ]).pipe(
    switchMap(([context, currentUser]) =>
      this._getsOneParticipantDto.getOne({
        eventId: context.eventId,
        email: currentUser.userEmail,
      })
    )
  );

  readonly selectedRoomType: FormGroup = new FormGroup({
    roomType: new FormControl(),
  });

  constructor(
    @Inject(GETS_ALL_ROOM_DTO) private _getsAllRoomDto: GetsAllRoomDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(SETS_PARTICIPANT_DTO)
    private _setsParticipantDto: SetsParticipantDtoPort,
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort
  ) {}

  onSelectedRoomTypeSubmitted(
    selectedRoomType: FormGroup,
    participantId: string
  ): void {
    this._setsParticipantDto.set({
      id: participantId,
      roomType: selectedRoomType.get('roomType')?.value,
    });
  }
}
