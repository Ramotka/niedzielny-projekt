import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { DietDTO } from '../../../application/ports/secondary/diet.dto';
import {
  GETS_ALL_DIET_DTO,
  GetsAllDietDtoPort,
} from '../../../application/ports/secondary/gets-all-diet.dto-port';
import {
  REMOVES_DIET_DTO,
  RemovesDietDtoPort,
} from '../../../application/ports/secondary/removes-diet.dto-port';
import {
  SETS_DIET_DTO,
  SetsDietDtoPort,
} from '../../../application/ports/secondary/sets-diet.dto-port';
import {
  INPUT_STATE_DTO_STORAGE,
  InputStateDtoStoragePort,
} from '../../../application/ports/secondary/input-state-dto.storage-port';
import { InputStateDTO } from '../../../application/ports/secondary/input-state.dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';
import {
  CONTEXT_DTO_STORAGE,
  ContextDtoStoragePort,
} from 'projects/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from 'projects/core/src/lib/application/ports/secondary/context.dto';

@Component({
  selector: 'lib-diet-list',
  templateUrl: './diet-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DietListComponent {
  inputState$: Observable<InputStateDTO> =
    this._inputStateDtoStorage.asObservable();

  readonly editingDiet: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
  });
  diets$: Observable<DietDTO[]> = this._contextDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data: ContextDTO) =>
        this._getsAllDietDto.getAll({ eventId: data.eventId })
      )
    );

  constructor(
    @Inject(GETS_ALL_DIET_DTO) private _getsAllDietDto: GetsAllDietDtoPort,
    @Inject(REMOVES_DIET_DTO) private _removesDietDto: RemovesDietDtoPort,
    @Inject(SETS_DIET_DTO) private _setsDietDto: SetsDietDtoPort,
    @Inject(INPUT_STATE_DTO_STORAGE)
    private _inputStateDtoStorage: InputStateDtoStoragePort,
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort
  ) {}

  onDeleteClicked(itemId: string): void {
    this._removesDietDto.remove(itemId);
  }

  onSaveChangesClicked(changedDiet: Partial<DietDTO>): void {
    this._setsDietDto.set({
      id: changedDiet.id,
      name: this.editingDiet.get('name')?.value,
    });

    this._inputStateDtoStorage.next({
      isEditing: false,
    });
  }

  onEditClicked(diet: DietDTO): void {
    this._inputStateDtoStorage.next({
      dietId: diet.id,
      isEditing: true,
    });

    this.editingDiet.get('name')?.setValue(diet.name);
  }
}
