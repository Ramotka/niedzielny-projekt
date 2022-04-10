import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportListComponent } from './transport-list.component';

@NgModule({ imports: [CommonModule],
  	declarations: [TransportListComponent],
  	providers: [],
  	exports: [TransportListComponent] })
export class TransportListComponentModule {
}
