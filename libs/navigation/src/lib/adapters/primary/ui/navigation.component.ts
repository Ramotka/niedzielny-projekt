import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from "@angular/core";
import { Observable } from "rxjs";
import { NavLinkDTO } from "../../../application/ports/secondary/nav-link.dto";
import {
  GETS_ALL_NAV_LINK_DTO,
  GetsAllNavLinkDtoPort,
} from "../../../application/ports/secondary/gets-all-nav-link.dto-port";

@Component({
  selector: "lib-navigation",
  templateUrl: "./navigation.component.html",
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  navLink$: Observable<NavLinkDTO[]> = this._getsAllNavLinkDto.getAll();

  constructor(
    @Inject(GETS_ALL_NAV_LINK_DTO)
    private _getsAllNavLinkDto: GetsAllNavLinkDtoPort
  ) {}
}
