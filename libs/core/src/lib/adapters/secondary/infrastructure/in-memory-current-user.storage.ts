import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { CurrentUserDTO } from '../../../application/ports/secondary/current-user.dto';
import { CurrentUserDtoStoragePort } from '../../../application/ports/secondary/current-user-dto.storage-port';

@Injectable()
export class InMemoryCurrentUserStorage
  extends ReplaySubject<CurrentUserDTO>
  implements CurrentUserDtoStoragePort {}
