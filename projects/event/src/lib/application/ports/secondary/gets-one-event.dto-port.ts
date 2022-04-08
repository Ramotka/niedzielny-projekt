import { InjectionToken } from "@angular/core";
import { Observable } from "rxjs";
import { EventDTO } from "./event.dto";

export const GETS_ONE_EVENT_DTO = new InjectionToken<GetsOneEventDtoPort>(
  "GETS_ONE_EVENT_DTO"
);

export interface GetsOneEventDtoPort {
  getOne(id: string): Observable<EventDTO>;
}
