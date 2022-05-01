import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { ParticipantDTO } from 'libs/participant/src/lib/application/ports/secondary/participant.dto';
import {
  GETS_ALL_PARTICIPANT_DTO,
  GetsAllParticipantDtoPort,
} from 'libs/participant/src/lib/application/ports/secondary/gets-all-participant.dto-port';
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
import { DietDTO } from '../../../application/ports/secondary/diet.dto';
import {
  GETS_ALL_DIET_DTO,
  GetsAllDietDtoPort,
} from '../../../application/ports/secondary/gets-all-diet.dto-port';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  SETS_PARTICIPANT_DTO,
  SetsParticipantDtoPort,
} from 'libs/participant/src/lib/application/ports/secondary/sets-participant.dto-port';

@Component({
  selector: 'lib-select-diet-for-participant',
  templateUrl: './select-diet-for-participant.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectDietForParticipantComponent {
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
  diets$: Observable<DietDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllDietDto.getAll({ eventId: data.eventId })
      )
    );
  readonly selectedDiet: FormGroup = new FormGroup({
    dietId: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(CURRENT_USER_DTO_STORAGE)
    private _currentUserDtoStoragePort: CurrentUserDtoStoragePort,
    @Inject(GETS_ONE_PARTICIPANT_DTO)
    private _getsOneParticipantDto: GetsOneParticipantDtoPort,
    @Inject(GETS_ALL_DIET_DTO) private _getsAllDietDto: GetsAllDietDtoPort,
    @Inject(SETS_PARTICIPANT_DTO)
    private _setsParticipantDto: SetsParticipantDtoPort
  ) {}

  onSelectedDietChanged(selectedDiet: FormGroup, participantId: string): void {
    this._setsParticipantDto.set({
      id: participantId,
      dietId: selectedDiet.get('dietId')?.value,
    });
  }
}
