import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomNumberPage } from './room-number.page';
import { SelectRoomNumberComponentModule } from '@room';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoomNumberPage,
      },
    ]),
    SelectRoomNumberComponentModule,
  ],
  declarations: [RoomNumberPage],
  providers: [],
  exports: [],
})
export class RoomNumberPageModule {}
