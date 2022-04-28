import { NgModule } from '@angular/core';
import { InMemorySearchEmailStorage } from './in-memory-search-email.storage';
import { SEARCH_EMAIL_DTO_STORAGE } from '../../../application/ports/secondary/search-email-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemorySearchEmailStorage, { provide: SEARCH_EMAIL_DTO_STORAGE, useExisting: InMemorySearchEmailStorage }],
  	exports: [] })
export class InMemorySearchEmailStorageModule {
}
