import { MSG_UPDATE, MSG_SEND } from '../actions/message';

export default function message(state = [], action) {
  switch (action.type) {
    case MSG_UPDATE:
      return action.messages;
    case MSG_SEND:
      return action.data;
    default:
      return state;
  }
}
