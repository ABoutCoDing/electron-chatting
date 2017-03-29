import { MSG_UPDATE } from '../actions/message';

export default function message(state = [], action) {
  switch (action.type) {
    case MSG_UPDATE:
      return action.messages;
    default:
      return state;
  }
}
