import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateRoomPage } from './create-room.page';
import { CreateRoomFormComponentModule } from 'libs/room/src/lib/adapters/primary/ui/create-room-form.component-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateRoomPage,
      },
    ]),
    CreateRoomFormComponentModule,
  ],
  declarations: [CreateRoomPage],
  providers: [],
  exports: [],
})
export class CreateRoomPageModule {}
