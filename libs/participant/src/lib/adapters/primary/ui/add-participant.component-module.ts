import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddParticipantComponent } from './add-participant.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [AddParticipantComponent],
  providers: [],
  exports: [AddParticipantComponent],
})
export class AddParticipantComponentModule {}
