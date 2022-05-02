import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { combineLatest, Observable, map, switchMap, tap } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'libs/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { InputStateDTO } from '../../../application/ports/secondary/input-state.dto';
import { ParticipantDTO } from '../../../application/ports/secondary/participant.dto';
import {
  GetsAllParticipantDtoPort,
  GETS_ALL_PARTICIPANT_DTO,
} from '../../../application/ports/secondary/gets-all-participant.dto-port';
import {
  RemovesParticipantDtoPort,
  REMOVES_PARTICIPANT_DTO,
} from '../../../application/ports/secondary/removes-participant.dto-port';
import {
  SetsParticipantDtoPort,
  SETS_PARTICIPANT_DTO,
} from '../../../application/ports/secondary/sets-participant.dto-port';
import {
  InputStateDtoStoragePort,
  INPUT_STATE_DTO_STORAGE,
} from '../../../application/ports/secondary/input-state-dto.storage-port';
import {
  SearchDtoStoragePort,
  SEARCH_DTO_STORAGE,
} from '../../../application/ports/secondary/search-dto.storage-port';

@Component({
  selector: 'lib-participants-list',
  templateUrl: './participants-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParticipantsListComponent {
  inputState$: Observable<InputStateDTO> =
    this._inputStateDtoStorage.asObservable();

  participantsList$: Observable<ParticipantDTO[]> = combineLatest([
    this._contextDtoStoragePort.asObservable(),
    this._searchDtoStorage.asObservable(),
  ]).pipe(
    switchMap(([context, search]) =>
      this._getsAllParticipantDto.getAll({
        eventId: context.eventId,
        email: search.email,
      })
    )
  );

  readonly editingParticipantForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(GETS_ALL_PARTICIPANT_DTO)
    private _getsAllParticipantDto: GetsAllParticipantDtoPort,
    // @Inject(GETS_ALL_SEARCH_DTO)
    // private _getsAllSearchDto: GetsAllSearchDtoPort,
    @Inject(REMOVES_PARTICIPANT_DTO)
    private _removesParticipantDto: RemovesParticipantDtoPort,
    @Inject(SETS_PARTICIPANT_DTO)
    private _setsParticipantDto: SetsParticipantDtoPort,
    @Inject(INPUT_STATE_DTO_STORAGE)
    private _inputStateDtoStorage: InputStateDtoStoragePort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(SEARCH_DTO_STORAGE)
    private _searchDtoStorage: SearchDtoStoragePort
  ) {}

  onDeleteParticipantClicked(id: string): void {
    this._removesParticipantDto.remove(id);
  }

  onEditParticipantClicked(participant: ParticipantDTO): void {
    this._inputStateDtoStorage.next({
      id: participant.id,
      isEditing: true,
    });
    this.editingParticipantForm.get('name')?.setValue(participant.name);
    this.editingParticipantForm.get('lastName')?.setValue(participant.lastName);
    this.editingParticipantForm.get('email')?.setValue(participant.email);
  }

  onSaveEditedParticipantClicked(
    changeParticipant: Partial<ParticipantDTO>
  ): void {
    this._setsParticipantDto.set({
      id: changeParticipant.id,
      name: this.editingParticipantForm.get('name')?.value,
      lastName: this.editingParticipantForm.get('lastName')?.value,
      email: this.editingParticipantForm.get('email')?.value,
    });
    this._inputStateDtoStorage.next({
      isEditing: false,
    });
  }
}
