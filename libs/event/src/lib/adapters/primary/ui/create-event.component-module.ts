import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateEventComponent } from "./create-event.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, BsDatepickerModule.forRoot()],
  declarations: [CreateEventComponent],
  providers: [],
  exports: [CreateEventComponent],
})
export class CreateEventComponentModule {}
