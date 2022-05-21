import { NgModule } from '@angular/core';
import { InMemoryRoomTypeStorage } from './in-memory-room-type.storage';
import { SELECTS_ROOM_TYPE_CONTEXT } from '../../../application/ports/secondary/context/selects-room-type.context-port';
import { SETS_STATE_ROOM_TYPE_CONTEXT } from '../../../application/ports/secondary/context/sets-state-room-type.context-port';

@NgModule({ imports: [],
  	declarations: [],
  	providers: [InMemoryRoomTypeStorage, { provide: SELECTS_ROOM_TYPE_CONTEXT, useExisting: InMemoryRoomTypeStorage }, { provide: SETS_STATE_ROOM_TYPE_CONTEXT, useExisting: InMemoryRoomTypeStorage }],
  	exports: [] })
export class InMemoryRoomTypeStorageModule {
}
