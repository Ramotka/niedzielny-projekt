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

@Component({
  selector: 'lib-users-list',
  templateUrl: './users-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersListComponent {
  usersList$: Observable<UserDTO[]> = this._getsAllUserDto.getAll();

  constructor(
    @Inject(GETS_ALL_USER_DTO) private _getsAllUserDto: GetsAllUserDtoPort,
    @Inject(REMOVES_USER_DTO) private _removesUserDto: RemovesUserDtoPort
  ) {}

  onDeleteUserClicked(userId: string): void {
    this._removesUserDto.remove(userId);
  }
}
