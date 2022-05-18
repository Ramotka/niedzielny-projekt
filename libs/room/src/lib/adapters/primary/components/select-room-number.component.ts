import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
  GetsOneParticipantDtoPort,
  GETS_ONE_PARTICIPANT_DTO,
} from 'libs/participant/src/lib/application/ports/secondary/gets-one-participant.dto-port';
import { ParticipantDTO } from 'libs/participant/src/lib/application/ports/secondary/participant.dto';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { Router } from '@angular/router';
import {
  SetsParticipantDtoPort,
  SETS_PARTICIPANT_DTO,
} from 'libs/participant/src/lib/application/ports/secondary/sets-participant.dto-port';

@Component({
  selector: 'lib-select-room-number',
  templateUrl: './select-room-number.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectRoomNumberComponent {
  availableRooms$: Observable<RoomDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllRoomDto.getAll({ eventId: data.eventId })
      ),
      map((data) => data.filter((room) => room.guests.length !== room.capacity))
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

  readonly selectedRoomNumber: FormGroup = new FormGroup({
    roomNr: new FormControl(),
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
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    private _router: Router
  ) {}

  onSelectedRoomNumberSubmitted(
    selectedRoomNumber: FormGroup,
    participantId: string
  ): void {
    this._setsParticipantDto.set({
      id: participantId,
      roomNr: selectedRoomNumber.get('roomNr')?.value,
    });
    const baseUrl = this._router.url.split('/').slice(0, -1).join('/');
    this._router.navigate([baseUrl + '/thank-you']);
  }
}
