import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectRoomNumberComponent } from './select-room-number.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SelectRoomNumberComponent],
  providers: [],
  exports: [SelectRoomNumberComponent],
})
export class SelectRoomNumberComponentModule {}
