export interface RoomDTO {
  readonly id: string;
  readonly roomNr: string;
  readonly capacity: number;
  readonly guests: Array<string>;
  readonly eventId: string;
}
