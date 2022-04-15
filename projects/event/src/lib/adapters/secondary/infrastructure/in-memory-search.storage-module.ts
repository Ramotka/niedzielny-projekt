import { NgModule } from '@angular/core';
import { InMemorySearchStorage } from './in-memory-search.storage';
import { SEARCH_DTO_STORAGE } from '../../../application/ports/secondary/search-dto.storage-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemorySearchStorage,
    { provide: SEARCH_DTO_STORAGE, useExisting: InMemorySearchStorage },
  ],
  exports: [],
})
export class InMemorySearchStorageModule {}
