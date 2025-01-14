export class UserIsAlreadyParticipantException extends Error {
    constructor() {
      super('User is already a participant');
      this.name = 'UserIsAlreadyParticipantException';
    }
  }
  