export interface RoomDTO {
  readonly id: string;
  readonly roomNr: number;
  readonly capacity: number;
  readonly guests: Array<string>;
  readonly eventId: string;
  readonly roomType: string;
}
