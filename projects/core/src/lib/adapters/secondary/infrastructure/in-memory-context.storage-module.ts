import { NgModule } from '@angular/core';
import { InMemoryContextStorage } from './in-memory-context.storage';
import { CONTEXT_DTO_STORAGE } from '../../../application/ports/secondary/context-dto.storage-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryContextStorage, { provide: CONTEXT_DTO_STORAGE, useExisting: InMemoryContextStorage }],
  	exports: [] })
export class InMemoryContextStorageModule {
}
