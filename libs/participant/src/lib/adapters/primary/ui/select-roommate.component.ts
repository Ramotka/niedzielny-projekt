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
  CurrentUserDtoStoragePort,
  CURRENT_USER_DTO_STORAGE,
} from 'libs/core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { combineLatest, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  GetsOneParticipantDtoPort,
  GETS_ONE_PARTICIPANT_DTO,
} from '../../../application/ports/secondary/gets-one-participant.dto-port';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  SetsParticipantDtoPort,
  SETS_PARTICIPANT_DTO,
} from '../../../application/ports/secondary/sets-participant.dto-port';
import {
  GETS_ALL_PARTICIPANT_DTO,
  GetsAllParticipantDtoPort,
} from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-select-roommate',
  templateUrl: './select-roommate.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectRoommateComponent {
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

  allParticipants$: Observable<ParticipantDTO[]> = combineLatest([
    this.participant$,
    this._contextDtoStoragePort
      .asObservable()
      .pipe(
        switchMap((data) =>
          this._getsAllParticipantDto.getAll({ eventId: data.eventId })
        )
      ),
  ]).pipe(
    map(([currentUser, participants]) =>
      participants.filter((item) => item.id !== currentUser.id)
    )
  );

  readonly selectedRoommate: FormGroup = new FormGroup({
    roommateId: new FormControl('', Validators.required),
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
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    private _router: Router
  ) {}

  onSelectedRoommateSubmitted(
    selectedRoommate: FormGroup,
    participantId: string
  ): void {
    const baseUrl = this._router.url.split('/').slice(0, -1).join('/');
    this._setsParticipantDto.set({
      id: participantId,
      roommateId: selectedRoommate.get('roommateId')?.value,
    });
    this._router.navigate([baseUrl + '/thank-you']);
  }
}
