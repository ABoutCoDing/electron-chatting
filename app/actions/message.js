import { DB } from '../utils/Firebase';

export const MSG_UPDATE = 'MESSAGE_UPDATE';
export const MSG_SEND = 'MESSAGE_SEND';


export function SendMessage(msg) {
  DB.ref(`messages/${ Date.now() / 1000|0 }`).set({
    data: msg,
    name: 'User name!',
    ua: navigator.userAgent
  });
}
