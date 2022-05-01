import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { ParticipantDTO } from 'libs/participant/src/lib/application/ports/secondary/participant.dto';
import { switchMap } from 'rxjs/operators';
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
} from 'libs/participant/src/lib/application/ports/secondary/gets-one-participant.dto-port';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  SETS_PARTICIPANT_DTO,
  SetsParticipantDtoPort,
} from 'libs/participant/src/lib/application/ports/secondary/sets-participant.dto-port';
import { TransportDTO } from '../../../application/ports/secondary/transport.dto';
import {
  GETS_ALL_TRANSPORT_DTO,
  GetsAllTransportDtoPort,
} from '../../../application/ports/secondary/gets-all-transport.dto-port';

@Component({
  selector: 'lib-select-transport-for-participant',
  templateUrl: './select-transport-for-participant.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectTransportForParticipantComponent {
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

  transports$: Observable<TransportDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllTransportDto.getAll({ eventId: data.eventId })
      )
    );

  readonly selectedTransport: FormGroup = new FormGroup({
    transportId: new FormControl('', Validators.required),
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
    @Inject(GETS_ALL_TRANSPORT_DTO)
    private _getsAllTransportDto: GetsAllTransportDtoPort
  ) {}

  onSelectedTransportChanged(
    selectedTransport: FormGroup,
    participantId: string
  ): void {
    this._setsParticipantDto.set({
      id: participantId,
      transportId: selectedTransport.get('transportId')?.value,
    });
  }
}
