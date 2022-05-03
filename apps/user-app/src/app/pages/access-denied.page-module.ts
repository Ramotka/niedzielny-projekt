import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AccessDeniedPage } from './access-denied.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: AccessDeniedPage,
        }
      ])],
  	declarations: [AccessDeniedPage],
  	providers: [],
  	exports: [] })
export class AccessDeniedPageModule {
}
