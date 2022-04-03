import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardPage } from './dashboard.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: DashboardPage,
        }
      ])],
  	declarations: [DashboardPage],
  	providers: [],
  	exports: [] })
export class DashboardPageModule {
}
