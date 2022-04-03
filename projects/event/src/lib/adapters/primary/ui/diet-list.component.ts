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

@Component({
  selector: 'lib-diet-list',
  templateUrl: './diet-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DietListComponent {
  diets$: Observable<DietDTO[]> = this._getsAllDietDto.getAll();
  inputState$: Observable<InputStateDTO> =
    this._inputStateDtoStorage.asObservable();

  constructor(
    @Inject(GETS_ALL_DIET_DTO) private _getsAllDietDto: GetsAllDietDtoPort,
    @Inject(REMOVES_DIET_DTO) private _removesDietDto: RemovesDietDtoPort,
    @Inject(SETS_DIET_DTO) private _setsDietDto: SetsDietDtoPort,
    @Inject(INPUT_STATE_DTO_STORAGE)
    private _inputStateDtoStorage: InputStateDtoStoragePort
  ) {}

  onDeleteClicked(itemId: string): void {
    this._removesDietDto.remove(itemId);
  }

  // onEditClicked(diet: Partial<DietDTO>): void {

  // //   this._setsDietDto.set({
  // //     id: diet.id,
  // //   });
  // // }

  onEditClicked(diet: DietDTO): void {
    this._inputStateDtoStorage.next({
      dietId: diet.id,
      isEditing: true,
    });
  }
}
