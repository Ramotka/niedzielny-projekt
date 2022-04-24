import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedCreateUserModalComponent } from './completed-create-user-modal.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule],
  declarations: [CompletedCreateUserModalComponent],
  providers: [],
  exports: [CompletedCreateUserModalComponent],
})
export class CompletedCreateUserModalComponentModule {}
