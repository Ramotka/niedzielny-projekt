import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { Observable } from 'rxjs';
import { UserDetailsDTO } from '../../../application/ports/secondary/user-details.dto';
import {
  GETS_ALL_USER_DETAILS_DTO,
  GetsAllUserDetailsDtoPort,
} from '../../../application/ports/secondary/gets-all-user-details.dto-port';

@Component({
  selector: 'lib-user-details-list',
  templateUrl: './user-details-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsListComponent {
  usersList$: Observable<UserDetailsDTO[]> =
    this._getsAllUserDetailsDto.getAll();

  constructor(
    @Inject(GETS_ALL_USER_DETAILS_DTO)
    private _getsAllUserDetailsDto: GetsAllUserDetailsDtoPort
  ) {}
}
