import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoomTypePage } from './room-type.page';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoomTypePage,
      },
    ]),
  ],
  declarations: [RoomTypePage],
  providers: [],
  exports: [],
})
export class RoomTypePageModule {}
