import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportCardComponent } from './transport-card.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TransportCardComponent],
  	providers: [],
  	exports: [TransportCardComponent] })
export class TransportCardComponentModule {
}
