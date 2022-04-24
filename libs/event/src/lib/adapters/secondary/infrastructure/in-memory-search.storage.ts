import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SearchDTO } from '../../../application/ports/secondary/search.dto';
import { SearchDtoStoragePort } from '../../../application/ports/secondary/search-dto.storage-port';

@Injectable()
export class InMemorySearchStorage
  extends ReplaySubject<SearchDTO>
  implements SearchDtoStoragePort {}
