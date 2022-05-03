import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  ContextDtoStoragePort,
  CONTEXT_DTO_STORAGE,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import {
  CurrentUserDtoStoragePort,
  CURRENT_USER_DTO_STORAGE,
} from 'libs/core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import {
  GetsOneParticipantDtoPort,
  GETS_ONE_PARTICIPANT_DTO,
} from 'libs/participant/src/lib/application/ports/secondary/gets-one-participant.dto-port';
import { ParticipantDTO } from 'libs/participant/src/lib/application/ports/secondary/participant.dto';
import {
  SetsParticipantDtoPort,
  SETS_PARTICIPANT_DTO,
} from 'libs/participant/src/lib/application/ports/secondary/sets-participant.dto-port';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { combineLatest, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'lib-cancel-attend-in-event-modal',
  templateUrl: './cancel-attend-in-event-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CancelAttendInEventModalComponent {
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

  constructor(
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(SETS_PARTICIPANT_DTO)
    private _setsParticipantDto: SetsParticipantDtoPort,
    private _router: Router,
    public modalRef?: BsModalRef
  ) {}

  onConfirmButtonClicked(participantId: string): void {
    this._setsParticipantDto.set({
      id: participantId,
      status: false,
    });
    this.modalRef?.hide();
    this._router.navigate(['my-events']);
  }

  onCancelButtonClicked(): void {
    this.modalRef?.hide();
  }
}
