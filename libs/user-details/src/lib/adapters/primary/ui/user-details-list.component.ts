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
import {
  REMOVES_USER_DETAILS_DTO,
  RemovesUserDetailsDtoPort,
} from '../../../application/ports/secondary/removes-user-details.dto-port';
import { switchMap } from 'rxjs/operators';
import {
  SEARCH_EMAIL_DTO_STORAGE,
  SearchEmailDtoStoragePort,
} from '../../../application/ports/secondary/search-email-dto.storage-port';

@Component({
  selector: 'lib-user-details-list',
  templateUrl: './user-details-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDetailsListComponent {
  usersList$: Observable<UserDetailsDTO[]> = this._searchEmailDtoStoragePort
    .asObservable()
    .pipe(
      switchMap((data) =>
        this._getsAllUserDetailsDto.getAll(
          data && data.email && data.email.length ? { email: data.email } : {}
        )
      )
    );

  constructor(
    @Inject(GETS_ALL_USER_DETAILS_DTO)
    private _getsAllUserDetailsDto: GetsAllUserDetailsDtoPort,
    @Inject(REMOVES_USER_DETAILS_DTO)
    private _removesUserDetailsDto: RemovesUserDetailsDtoPort,
    @Inject(SEARCH_EMAIL_DTO_STORAGE)
    private _searchEmailDtoStoragePort: SearchEmailDtoStoragePort
  ) {}

  onDeleteUserDetailsClicked(id: string): void {
    this._removesUserDetailsDto.remove(id);
  }
}
