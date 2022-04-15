import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EditEventComponent } from './edit-event.component';

@NgModule({
  imports: [CommonModule, BsDatepickerModule.forRoot(), ReactiveFormsModule],
  declarations: [EditEventComponent],
  providers: [],
  exports: [EditEventComponent],
})
export class EditEventComponentModule {}
