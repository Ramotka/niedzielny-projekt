import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectDietForParticipantComponent } from './select-diet-for-participant.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SelectDietForParticipantComponent],
  providers: [],
  exports: [SelectDietForParticipantComponent],
})
export class SelectDietForParticipantComponentModule {}
