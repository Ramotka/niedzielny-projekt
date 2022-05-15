import { NgModule } from '@angular/core';
import { InMemoryInputStateStorage } from './in-memory-input-state.storage';
import { INPUT_STATE_DTO_STORAGE } from '../../../application/ports/secondary/input-state-dto.storage-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryInputStateStorage,
    {
      provide: INPUT_STATE_DTO_STORAGE,
      useExisting: InMemoryInputStateStorage,
    },
  ],
  exports: [],
})
export class InMemoryInputStateStorageModule {}
