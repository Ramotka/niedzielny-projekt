import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserEventsListComponent } from './user-events-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [UserEventsListComponent],
  providers: [],
  exports: [UserEventsListComponent],
})
export class UserEventsListComponentModule {}
