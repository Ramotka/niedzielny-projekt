import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateRoomPage } from './create-room.page';
import { CreateRoomFormComponentModule } from 'libs/room/src/lib/adapters/primary/ui/create-room-form.component-module';
import { FirebaseRoomServiceModule } from '@room';
import { RoomListComponentModule } from 'libs/room/src/lib/adapters/primary/ui/room-list.component-module';
import { InMemoryInputStateStorageModule } from 'libs/room/src/lib/adapters/secondary/infrastructure/in-memory-input-state.storage-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateRoomPage,
      },
    ]),
    FirebaseRoomServiceModule,
    CreateRoomFormComponentModule,
    RoomListComponentModule,
    InMemoryInputStateStorageModule,
  ],
  declarations: [CreateRoomPage],
  providers: [],
  exports: [],
})
export class CreateRoomPageModule {}
