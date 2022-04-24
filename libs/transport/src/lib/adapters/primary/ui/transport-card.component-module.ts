import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportCardComponent } from './transport-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [TransportCardComponent],
  providers: [],
  exports: [TransportCardComponent],
})
export class TransportCardComponentModule {}
