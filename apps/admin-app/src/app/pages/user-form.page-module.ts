import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserFormPage } from './user-form.page';

@NgModule({ imports: [CommonModule, 
      RouterModule.forChild([
        {
          path: '',
          component: UserFormPage,
        }
      ])],
  	declarations: [UserFormPage],
  	providers: [],
  	exports: [] })
export class UserFormPageModule {
}
