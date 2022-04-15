import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { AttractionDTO } from '../../../application/ports/secondary/attraction.dto';
import {
  GETS_ALL_ATTRACTION_DTO,
  GetsAllAttractionDtoPort,
} from '../../../application/ports/secondary/gets-all-attraction.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/context-dto.storage-port';
import {
  InputStateDtoStoragePort,
  INPUT_STATE_DTO_STORAGE,
} from '../../../application/ports/secondary/input-state-dto.storage-port';
import { InputStateDTO } from '../../../application/ports/secondary/input-state.dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {
  REMOVES_ATTRACTION_DTO,
  RemovesAttractionDtoPort,
} from '../../../application/ports/secondary/removes-attraction.dto-port';
import {
  SETS_ATTRACTION_DTO,
  SetsAttractionDtoPort,
} from '../../../application/ports/secondary/sets-attraction.dto-port';

@Component({
  selector: 'lib-attractions-list',
  templateUrl: './attractions-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AttractionsListComponent {
  inputState$: Observable<InputStateDTO> =
    this._inputStateDtoStorage.asObservable();

  attractions$: Observable<AttractionDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllAttractionDto.getAll({ eventId: data.eventId })
      )
    );
  readonly editAttraction: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(GETS_ALL_ATTRACTION_DTO)
    private _getsAllAttractionDto: GetsAllAttractionDtoPort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(INPUT_STATE_DTO_STORAGE)
    private _inputStateDtoStorage: InputStateDtoStoragePort,
    @Inject(REMOVES_ATTRACTION_DTO)
    private _removesAttractionDto: RemovesAttractionDtoPort,
    @Inject(SETS_ATTRACTION_DTO)
    private _setsAttractionDto: SetsAttractionDtoPort
  ) {}

  onDeleteButtonClicked(attractionId: string): void {
    this._removesAttractionDto.remove(attractionId);
  }

  onEditButtonClicked(attraction: AttractionDTO): void {
    this._inputStateDtoStorage.next({
      attractionId: attraction.id,
      isEditing: true,
    });
    this.editAttraction.get('name')?.setValue(attraction.name);
  }

  onSaveButtonClicked(changedAttraction: Partial<AttractionDTO>): void {
    this._setsAttractionDto.set({
      id: changedAttraction.id,
      name: this.editAttraction.get('name')?.value,
    });

    this._inputStateDtoStorage.next({
      isEditing: false,
    });
  }
}
