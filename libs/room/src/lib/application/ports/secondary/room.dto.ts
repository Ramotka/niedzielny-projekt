export interface RoomDTO {
  readonly id: string;
  readonly roomNr: string;
  readonly capacity: string;
  readonly guests: Array<string>;
}
