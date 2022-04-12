import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DietCardComponent } from './diet-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [DietCardComponent],
  providers: [],
  exports: [DietCardComponent],
})
export class DietCardComponentModule {}
