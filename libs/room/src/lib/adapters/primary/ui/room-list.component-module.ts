import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [RoomListComponent],
  providers: [],
  exports: [RoomListComponent],
})
export class RoomListComponentModule {}
