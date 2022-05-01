import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoommatePage } from './roommate.page';
import { SelectRoommateComponentModule } from '@participant';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: RoommatePage,
      },
    ]),
    SelectRoommateComponentModule,
  ],
  declarations: [RoommatePage],
  providers: [],
  exports: [],
})
export class RoommatePageModule {}
