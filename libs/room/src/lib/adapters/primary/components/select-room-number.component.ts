import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Observable, combineLatest } from 'rxjs';
import { filter, map, switchMap, take } from 'rxjs/operators';

import { RoomDTO } from '../../../application/ports/secondary/room.dto';
import {
  GETS_ALL_ROOM_DTO,
  GetsAllRoomDtoPort,
} from '../../../application/ports/secondary/gets-all-room.dto-port';
import {
  SETS_ROOM_DTO,
  SetsRoomDtoPort,
} from '../../../application/ports/secondary/sets-room.dto-port';
import {
  GETS_ONE_ROOM_DTO,
  GetsOneRoomDtoPort,
} from '../../../application/ports/secondary/dto/gets-one-room.dto-port';
import { ParticipantDTO } from 'libs/participant/src/lib/application/ports/secondary/participant.dto';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import {
  SETS_PARTICIPANT_DTO,
  SetsParticipantDtoPort,
} from 'libs/participant/src/lib/application/ports/secondary/sets-participant.dto-port';
import {
  GETS_ONE_PARTICIPANT_DTO,
  GetsOneParticipantDtoPort,
} from 'libs/participant/src/lib/application/ports/secondary/gets-one-participant.dto-port';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import {
  SELECTS_ROOM_TYPE_CONTEXT,
  SelectsRoomTypeContextPort,
} from '../../../application/ports/secondary/context/selects-room-type.context-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-select-room-number',
  templateUrl: './select-room-number.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectRoomNumberComponent {
  availableRooms$: Observable<RoomDTO[]> = combineLatest([
    this._contextDtoStoragePort.asObservable(),
    this._selectsRoomTypeContextPort.select(),
  ]).pipe(
    switchMap(([context, room]) =>
      this._getsAllRoomDto.getAll({
        eventId: context.eventId,
        roomType: room.roomType,
      })
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
    roomId: new FormControl(''),
  });

  constructor(
    @Inject(GETS_ALL_ROOM_DTO) private _getsAllRoomDto: GetsAllRoomDtoPort,
    @Inject(SETS_ROOM_DTO) private _setsRoomDto: SetsRoomDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(SETS_PARTICIPANT_DTO)
    private _setsParticipantDto: SetsParticipantDtoPort,
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(GETS_ONE_ROOM_DTO)
    private _getsOneRoomDto: GetsOneRoomDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    @Inject(SELECTS_ROOM_TYPE_CONTEXT)
    private _selectsRoomTypeContextPort: SelectsRoomTypeContextPort,
    private _router: Router
  ) {}

  onSelectedRoomNumberSubmitted(
    selectedRoomNumber: FormGroup,
    participantId: string
  ): void {
    this._setsParticipantDto.set({
      id: participantId,
      roomId: selectedRoomNumber.get('roomId')?.value,
    });
    this._getsOneRoomDto
      .getOne(selectedRoomNumber.get('roomId')?.value)
      .pipe(
        take(1),
        switchMap(async (data) =>
          this._setsRoomDto.set({
            id: selectedRoomNumber.get('roomId')?.value,
            guests: [participantId].concat(data.guests),
          })
        )
      )
      .subscribe(() => {
        const baseUrl = this._router.url.split('/').slice(0, -1).join('/');
        this._router.navigate([baseUrl + '/thank-you']);
      });
  }
}
