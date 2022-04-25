import { NgModule } from '@angular/core';
import { InMemoryCurrentUserStorage } from './in-memory-current-user.storage';
import { CURRENT_USER_DTO_STORAGE } from '../../../application/ports/secondary/current-user-dto.storage-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    InMemoryCurrentUserStorage,
    {
      provide: CURRENT_USER_DTO_STORAGE,
      useExisting: InMemoryCurrentUserStorage,
    },
  ],
  exports: [],
})
export class InMemoryCurrentUserStorageModule {}
