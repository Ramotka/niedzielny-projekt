import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateUserComponent } from './create-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    ModalModule.forRoot(),
  ],
  declarations: [CreateUserComponent],
  providers: [],
  exports: [CreateUserComponent],
})
export class CreateUserComponentModule {}
