import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectRoomTypeComponent } from './select-room-type.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SelectRoomTypeComponent],
  providers: [],
  exports: [SelectRoomTypeComponent],
})
export class SelectRoomTypeComponentModule {}
