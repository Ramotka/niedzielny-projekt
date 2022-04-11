import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EditEventComponent } from "./edit-event.component";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";

@NgModule({
  imports: [CommonModule, BsDatepickerModule.forRoot()],
  declarations: [EditEventComponent],
  providers: [],
  exports: [EditEventComponent],
})
export class EditEventComponentModule {}
