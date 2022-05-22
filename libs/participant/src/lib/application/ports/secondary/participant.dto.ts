export interface ParticipantDTO {
  readonly id: string;
  readonly name: string;
  readonly lastName: string;
  readonly email: string;
  readonly eventId: string;
  readonly dietId: string;
  readonly transportId: string;
  readonly attractionId: string;
  readonly roomType: string;
  readonly roomId: string;
  readonly roommateId: string | null;
  readonly status: boolean;
}
