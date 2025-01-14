import { Participation } from 'src/webinars/entities/participation.entity';

export interface IParticipationRepository {
  findByWebinarId(webinarId: string): Promise<Participation[]>;
  save(participation: Participation): Promise<void>;
  findByWebinarIdAndUserId(userId: String, webinarId: String): Promise<Participation | null>;
}
