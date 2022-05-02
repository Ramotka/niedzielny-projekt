import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  ContextDtoStoragePort,
  CONTEXT_DTO_STORAGE,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import {
  GetsOneParticipantDtoPort,
  GETS_ONE_PARTICIPANT_DTO,
} from '../../../application/ports/secondary/gets-one-participant.dto-port';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { combineLatest, Observable } from 'rxjs';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  SetsParticipantDtoPort,
  SETS_PARTICIPANT_DTO,
} from '../../../application/ports/secondary/sets-participant.dto-port';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-select-room-type',
  templateUrl: './select-room-type.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectRoomTypeComponent {
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
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(SETS_PARTICIPANT_DTO)
    private _setsParticipantDto: SetsParticipantDtoPort,
    private _router: Router
  ) {}

  onSelectedRoomTypeChanged(
    selectedRoomType: FormGroup,
    participantId: string
  ): void {
    this._setsParticipantDto.set({
      id: participantId,
      roomType: selectedRoomType.get('roomType')?.value,
    });
  }

  onRoomTypeSubmitted(participant: ParticipantDTO): void {
    const baseUrl = this._router.url.split('/').slice(0, -1).join('/');
    if (participant.roomType === 'single') {
      this._setsParticipantDto.set({ id: participant.id, roommateId: null });
      this._router.navigate([baseUrl + '/thank-you']);
    } else {
      this._router.navigate([baseUrl + '/roommate']);
    }
  }
}
