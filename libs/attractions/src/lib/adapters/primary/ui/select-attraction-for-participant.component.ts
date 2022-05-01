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
import { AttractionDTO } from '../../../application/ports/secondary/attraction.dto';
import {
  GETS_ALL_ATTRACTION_DTO,
  GetsAllAttractionDtoPort,
} from '../../../application/ports/secondary/gets-all-attraction.dto-port';

@Component({
  selector: 'lib-select-attraction-for-participant',
  templateUrl: './select-attraction-for-participant.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectAttractionForParticipantComponent {
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

  attractions$: Observable<AttractionDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllAttractionDto.getAll({ eventId: data.eventId })
      )
    );

  readonly selectedAttraction: FormGroup = new FormGroup({
    attractionId: new FormControl('', Validators.required),
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
    @Inject(GETS_ALL_ATTRACTION_DTO)
    private _getsAllAttractionDto: GetsAllAttractionDtoPort
  ) {}

  onSelectedAttractionChanged(
    selectedAttraction: FormGroup,
    participantId: string
  ): void {
    this._setsParticipantDto.set({
      id: participantId,
      attractionId: selectedAttraction.get('attractionId')?.value,
    });
  }
}
