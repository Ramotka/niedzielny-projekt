import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { UserDTO } from '../../../application/ports/secondary/user.dto';
import {
  GETS_ALL_USER_DTO,
  GetsAllUserDtoPort,
} from '../../../application/ports/secondary/gets-all-user.dto-port';
import {
  REMOVES_USER_DTO,
  RemovesUserDtoPort,
} from '../../../application/ports/secondary/removes-user.dto-port';
import {
  SETS_USER_DTO,
  SetsUserDtoPort,
} from '../../../application/ports/secondary/sets-user.dto-port';
import {
  INPUT_STATE_DTO_STORAGE,
  InputStateDtoStoragePort,
} from '../../../application/ports/secondary/input-state-dto.storage-port';
import { InputStateDTO } from '../../../application/ports/secondary/input-state.dto';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'lib-users-list',
  templateUrl: './users-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  usersList$: Observable<UserDTO[]> = this._getsAllUserDto.getAll();

  inputState$: Observable<InputStateDTO> =
    this._inputStateDtoStorage.asObservable();

  readonly editingUserForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
  });

  constructor(
    @Inject(GETS_ALL_USER_DTO) private _getsAllUserDto: GetsAllUserDtoPort,
    @Inject(REMOVES_USER_DTO) private _removesUserDto: RemovesUserDtoPort,
    @Inject(SETS_USER_DTO) private _setsUserDto: SetsUserDtoPort,
    @Inject(INPUT_STATE_DTO_STORAGE)
    private _inputStateDtoStorage: InputStateDtoStoragePort
  ) {}

  onDeleteUserClicked(userId: string): void {
    this._removesUserDto.remove(userId);
  }

  onEditUserClicked(user: UserDTO): void {
    this._inputStateDtoStorage.next({
      userId: user.id,
      isEditing: true,
    });
    this.editingUserForm.get('name')?.setValue(user.name);
    this.editingUserForm.get('lastName')?.setValue(user.lastName);
    this.editingUserForm.get('email')?.setValue(user.email);
  }

  onSaveEditedUserClicked(changedUser: Partial<UserDTO>): void {
    this._setsUserDto.set({
      id: changedUser.id,
      name: this.editingUserForm.get('name')?.value,
      lastName: this.editingUserForm.get('lastName')?.value,
      email: this.editingUserForm.get('email')?.value,
    });
    this._inputStateDtoStorage.next({
      isEditing: false,
    });
  }
}
