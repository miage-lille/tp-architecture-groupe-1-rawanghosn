import { Participation } from './../entities/participation.entity';
import { IParticipationRepository } from 'src/webinars/ports/participation-repository.interface';

export class InMemoryParticipationRepository implements IParticipationRepository {
  constructor(public database: Participation[] = []) {}
  async findByWebinarIdAndUserId(userId: String, webinarId: String): Promise<Participation | null>  {
      const participation = this.database.find(
        (entry) => entry.props.userId === userId && entry.props.webinarId === webinarId
      );
      return participation || null; 
  }

  async findByWebinarId(webinarId: string): Promise<Participation[]>{ 
    return this.database.filter((entry) => entry.props.webinarId === webinarId);
  }

  async save(participation: Participation): Promise<void>{
    this.database.push(participation);
  }
}
