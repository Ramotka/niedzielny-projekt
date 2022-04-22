import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsListComponent } from './participants-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [ParticipantsListComponent],
  providers: [],
  exports: [ParticipantsListComponent],
})
export class ParticipantsListComponentModule {}
