import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietListComponent } from './diet-list.component';

@NgModule({
  imports: [CommonModule],
  declarations: [DietListComponent],
  providers: [],
  exports: [DietListComponent],
})
export class DietListComponentModule {}
