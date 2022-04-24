import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'lib-completed-create-user-modal',
  templateUrl: './completed-create-user-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedCreateUserModalComponent {
  constructor(public modalRef?: BsModalRef, private _router?: Router) {}

  hideModalClicked(link: string) {
    this.modalRef?.hide();
    this._router?.navigate([link]);
  }
}
