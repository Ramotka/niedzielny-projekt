import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TransportPage } from './transport.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: TransportPage,
        }
      ])],
  	declarations: [TransportPage],
  	providers: [],
  	exports: [] })
export class TransportPageModule {
}
