import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'lib-completed-create-user-modal',
  templateUrl: './completed-create-user-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CompletedCreateUserModalComponent {
  constructor(public modalRef?: BsModalRef) {}

  hideModalClicked() {
    this.modalRef?.hide();
  }
}
