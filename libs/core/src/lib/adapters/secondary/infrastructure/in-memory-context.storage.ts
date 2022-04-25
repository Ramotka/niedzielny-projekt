import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { ContextDTO } from '../../../application/ports/secondary/context.dto';
import { ContextDtoStoragePort } from '../../../application/ports/secondary/context-dto.storage-port';

@Injectable()
export class InMemoryContextStorage
  extends ReplaySubject<ContextDTO>
  implements ContextDtoStoragePort {}
