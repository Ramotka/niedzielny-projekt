import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportListComponent } from './transport-list.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [TransportListComponent],
  providers: [],
  exports: [TransportListComponent],
})
export class TransportListComponentModule {}
