import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateRoomFormComponent } from './create-room-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [CreateRoomFormComponent],
  providers: [],
  exports: [CreateRoomFormComponent],
})
export class CreateRoomFormComponentModule {}
