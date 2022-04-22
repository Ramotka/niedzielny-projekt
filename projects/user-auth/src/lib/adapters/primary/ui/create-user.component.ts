import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CompletedCreateUserModalComponent } from './completed-create-user-modal.component';

@Component({
  selector: 'lib-create-user',
  templateUrl: './create-user.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateUserComponent {
  readonly newUser: FormGroup = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private _auth: AngularFireAuth,
    private modalService: BsModalService
  ) {}

  modalRef?: BsModalRef;

  onCreateUserSubmited(newUser: FormGroup): void {
    this._auth.createUserWithEmailAndPassword(
      newUser.get('email')?.value,
      newUser.get('password')?.value
    );
    this.newUser.reset();
    this.modalRef = this.modalService.show(CompletedCreateUserModalComponent);
  }
}
