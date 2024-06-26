import { NotFoundError, InvalidParamError } from '@/domain/errors'

export type ErrorMap = Map<string, Error>

export const ErrorMap: ErrorMap = new Map([
  [
    'Update() requires either a single JavaScript object or an alternating list of field/value pairs that can be followed by an optional precondition. At least one field must be updated.',
    new InvalidParamError('attrs'),
  ],
  [
    'Could not be created the subscription because Could not create credit card. The card verification failed.',
    new InvalidParamError('card'),
  ],
  [
    'Subscription not found.',
    new NotFoundError('subscription'),
  ],
  [
    '5 NOT_FOUND: No document to update: projects/stima-2734b/databases/(default)/documents/users/Dbe9RrHEpHb3VGlP35pUGXVAUb63',
    new NotFoundError(''),
  ],
])
