import { DB, userId } from '../utils/Firebase';

export const MSG_UPDATE = 'MESSAGE_UPDATE';

export function UpdateMessages(messages) {
  return {
    type: MSG_UPDATE,
    messages
  }
}