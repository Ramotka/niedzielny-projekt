import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchParticipantComponent } from './search-participant.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [SearchParticipantComponent],
  providers: [],
  exports: [SearchParticipantComponent],
})
export class SearchParticipantComponentModule {}
