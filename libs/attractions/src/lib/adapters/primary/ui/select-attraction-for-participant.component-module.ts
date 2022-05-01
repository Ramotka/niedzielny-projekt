import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectAttractionForParticipantComponent } from './select-attraction-for-participant.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SelectAttractionForParticipantComponent],
  providers: [],
  exports: [SelectAttractionForParticipantComponent],
})
export class SelectAttractionForParticipantComponentModule {}
