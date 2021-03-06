import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  GETS_ALL_ROOM_DTO,
  GetsAllRoomDtoPort,
} from '../../../application/ports/secondary/gets-all-room.dto-port';
import {
  SETS_STATE_ROOM_TYPE_CONTEXT,
  SetsStateRoomTypeContextPort,
} from '../../../application/ports/secondary/context/sets-state-room-type.context-port';
import { ParticipantDTO } from 'libs/participant/src/lib/application/ports/secondary/participant.dto';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import {
  GETS_ONE_PARTICIPANT_DTO,
  GetsOneParticipantDtoPort,
} from 'libs/participant/src/lib/application/ports/secondary/gets-one-participant.dto-port';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-select-room',
  templateUrl: './select-room.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectRoomComponent {
  availableRooms$: Observable<string[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllRoomDto.getAll({ eventId: data.eventId })
      ),
      map((data) =>
        data.filter((room) => room.guests.length !== room.capacity)
      ),
      map((data) => data.map((room) => room.roomType)),
      map((data) => [...new Set(data)])
      // tap((data) =>
      //   this.selectedRoomType.patchValue({
      //     roomType: data[0],
      //   })
      // )
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
    roomType: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(GETS_ALL_ROOM_DTO) private _getsAllRoomDto: GetsAllRoomDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    @Inject(SETS_STATE_ROOM_TYPE_CONTEXT)
    private _setsStateRoomTypeContextPort: SetsStateRoomTypeContextPort,
    private _router: Router
  ) {}

  onSelectedRoomTypeSubmitted(selectedRoomType: FormGroup): void {
    localStorage.setItem('roomType', selectedRoomType.get('roomType')?.value);
    this._setsStateRoomTypeContextPort
      .setState({
        roomType: selectedRoomType.get('roomType')?.value,
      })
      .subscribe(() => {
        const baseUrl = this._router.url.split('/').slice(0, -1).join('/');
        this._router.navigate([baseUrl + '/room-number']);
      });
  }
}
