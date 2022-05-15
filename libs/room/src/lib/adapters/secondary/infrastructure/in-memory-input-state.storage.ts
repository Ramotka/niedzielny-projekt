import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { InputStateDTO } from '../../../application/ports/secondary/input-state.dto';
import { InputStateDtoStoragePort } from '../../../application/ports/secondary/input-state-dto.storage-port';

@Injectable()
export class InMemoryInputStateStorage
  extends ReplaySubject<InputStateDTO>
  implements InputStateDtoStoragePort {}
