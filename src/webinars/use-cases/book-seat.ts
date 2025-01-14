import { IMailer } from 'src/core/ports/mailer.interface';
import { Executable } from 'src/shared/executable';
import { User } from 'src/users/entities/user.entity';
import { IUserRepository } from 'src/users/ports/user-repository.interface';
import { IParticipationRepository } from 'src/webinars/ports/participation-repository.interface';
import { IWebinarRepository } from 'src/webinars/ports/webinar-repository.interface';
import { Participation } from '../entities/participation.entity';
import { UserIsAlreadyParticipantException } from 'src/webinars/exceptions/user-already-participant';

type Request = {
  webinarId: string;
  user: User;
};
type Response = void;

export class BookSeat implements Executable<Request, Response> {
  constructor(
    private readonly participationRepository: IParticipationRepository,
    private readonly userRepository: IUserRepository,
    private readonly webinarRepository: IWebinarRepository,
    private readonly mailer: IMailer,
  ) {}
  async execute({ webinarId, user }: Request): Promise<Response> {
    
    const participation = new Participation({
    userId: user.props.id,
    webinarId: webinarId});

    if (this.participationRepository.findByWebinarIdAndUserId(user.props.id, webinarId) != null ) {
          throw new UserIsAlreadyParticipantException();
    }

    await this.participationRepository.save(participation);
  }

}
