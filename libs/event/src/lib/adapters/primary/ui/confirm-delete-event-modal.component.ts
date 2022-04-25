import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import {
  ContextDtoStoragePort,
  CONTEXT_DTO_STORAGE,
} from 'projects/core/src/lib/application/ports/secondary/context-dto.storage-port';
import { ContextDTO } from 'projects/core/src/lib/application/ports/secondary/context.dto';
import { Observable } from 'rxjs';
import { EventDTO } from '../../../application/ports/secondary/event.dto';
import {
  RemovesEventDtoPort,
  REMOVES_EVENT_DTO,
} from '../../../application/ports/secondary/removes-event.dto-port';

@Component({
  selector: 'lib-confirm-delete-event-modal',
  templateUrl: './confirm-delete-event-modal.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDeleteEventModalComponent {
  constructor(
    @Inject(CONTEXT_DTO_STORAGE)
    private _contextDtoStoragePort: ContextDtoStoragePort,
    @Inject(REMOVES_EVENT_DTO) private _removesEventDto: RemovesEventDtoPort,
    public modalRef?: BsModalRef
  ) {}

  event$: Observable<ContextDTO> = this._contextDtoStoragePort.asObservable();

  onCancelButtonClicked() {
    this.modalRef?.hide();
  }

  onConfirmDeleteTaskButtonClicked(eventId: string): void {
    this._removesEventDto.remove(eventId);
    this.modalRef?.hide();
  }
}
