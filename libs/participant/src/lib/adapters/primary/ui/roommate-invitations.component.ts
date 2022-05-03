import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import {
  CURRENT_USER_DTO_STORAGE,
  CurrentUserDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import {
  GETS_ONE_PARTICIPANT_DTO,
  GetsOneParticipantDtoPort,
} from '../../../application/ports/secondary/gets-one-participant.dto-port';
import {
  SETS_PARTICIPANT_DTO,
  SetsParticipantDtoPort,
} from '../../../application/ports/secondary/sets-participant.dto-port';
import {
  GETS_ALL_PARTICIPANT_DTO,
  GetsAllParticipantDtoPort,
} from '../../../application/ports/secondary/gets-all-participant.dto-port';
import { Router } from '@angular/router';

@Component({
  selector: 'lib-roommate-invitations',
  templateUrl: './roommate-invitations.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoommateInvitationsComponent {
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

  invitations$: Observable<ParticipantDTO[]> = combineLatest([
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
      participants.filter(
        (item) =>
          item.roommateId === currentUser.id &&
          item.id !== currentUser.roommateId
      )
    )
  );

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

  onAcceptButtonClicked(invitationId: string, participantId: string): void {
    this._setsParticipantDto.set({
      id: participantId,
      roommateId: invitationId,
    });
  }

  onCancelButtonClicked(invitationId: string): void {
    this._setsParticipantDto.set({
      id: invitationId,
      roommateId: null,
    });
  }
}
