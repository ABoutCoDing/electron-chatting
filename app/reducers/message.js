import { MSG_UPDATE, MSG_SEND } from '../actions/message';

export default function message(state = [], action) {
  switch (action.type) {
    case MSG_UPDATE:
      return state;
    case MSG_SEND:
      return state;
    default:
      return state;
  }
}
