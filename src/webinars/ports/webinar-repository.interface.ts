import { Webinar } from 'src/webinars/entities/webinar.entity';
import { Participation } from '../entities/participation.entity';

export interface IWebinarRepository {
  create(webinar: Webinar): Promise<void>;  
}
