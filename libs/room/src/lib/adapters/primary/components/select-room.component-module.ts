import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectRoomComponent } from './select-room.component';

@NgModule({ imports: [CommonModule, ReactiveFormsModule],
  	declarations: [SelectRoomComponent],
  	providers: [],
  	exports: [SelectRoomComponent] })
export class SelectRoomComponentModule {
}
