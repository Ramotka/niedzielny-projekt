import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CreateRoomPage } from './create-room.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CreateRoomPage,
      },
    ]),
  ],
  declarations: [CreateRoomPage],
  providers: [],
  exports: [],
})
export class CreateRoomPageModule {}
