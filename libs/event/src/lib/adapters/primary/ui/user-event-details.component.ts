import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  GETS_ONE_EVENT_DTO,
  GetsOneEventDtoPort,
} from '../../../application/ports/secondary/gets-one-event.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import {
  SETS_PARTICIPANT_DTO,
  SetsParticipantDtoPort,
} from 'libs/participant/src/lib/application/ports/secondary/sets-participant.dto-port';
import { ParticipantDTO } from 'libs/participant/src/lib/application/ports/secondary/participant.dto';
import {
  GETS_ONE_PARTICIPANT_DTO,
  GetsOneParticipantDtoPort,
} from 'libs/participant/src/lib/application/ports/secondary/gets-one-participant.dto-port';
import {
  CurrentUserDtoStoragePort,
  CURRENT_USER_DTO_STORAGE,
} from 'libs/core/src/lib/application/ports/secondary/current-user-dto.storage-port';
import { CancelAttendInEventModalComponent } from './cancel-attend-in-event-modal.component';

@Component({
  selector: 'lib-user-event-details',
  templateUrl: './user-event-details.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserEventDetailsComponent {
  event$: Observable<EventDTO> = this._contextDtoStoragePort
    .asObservable()
    .pipe(switchMap((data) => this._getsOneEventDto.getOne(data.eventId)));

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
    @Inject(GETS_ONE_EVENT_DTO) private _getsOneEventDto: GetsOneEventDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    private _router: Router,
    private modalService: BsModalService,
    @Inject(SETS_PARTICIPANT_DTO)
    private _setsParticipantDto: SetsParticipantDtoPort,
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort
  ) {}

  modalRef?: BsModalRef;

  onConfirmButtonClicked(participantId: string): void {
    const baseUrl = this._router.url;
    this._setsParticipantDto.set({
      id: participantId,
      status: true,
    });
    this._router.navigate([baseUrl + '/setup']);
  }

  onCancelButtonClicked(participantId: string): void {
    this.modalRef = this.modalService.show(CancelAttendInEventModalComponent);
    //   this._setsParticipantDto.set({
    //     id: participantId,
    //     status: false,
    //   });
    //   this._router.navigate(['my-events']);
  }
}
