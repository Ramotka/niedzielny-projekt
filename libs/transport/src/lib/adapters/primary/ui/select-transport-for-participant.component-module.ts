import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectTransportForParticipantComponent } from './select-transport-for-participant.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SelectTransportForParticipantComponent],
  providers: [],
  exports: [SelectTransportForParticipantComponent],
})
export class SelectTransportForParticipantComponentModule {}
