import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SearchEmailDTO } from '../../../application/ports/secondary/search-email.dto';
import { SearchEmailDtoStoragePort } from '../../../application/ports/secondary/search-email-dto.storage-port';

@Injectable()
export class InMemorySearchEmailStorage extends ReplaySubject<SearchEmailDTO> implements SearchEmailDtoStoragePort {
}
