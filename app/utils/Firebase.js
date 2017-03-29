import { initializeApp, database } from 'firebase';

import { uidGen } from './uid';
import { UpdateMessages } from '../actions/message';
import { Dispatch } from '../index';

export let FirebaseApp;
export let DB;
export let messageRef;
export const userId = localStorage.getItem('userId') ? localStorage.getItem('userId') : uidGen();
if (!localStorage.getItem('userId')) localStorage.setItem('userId', userId);

export function initializeFirebase() {
  FirebaseApp = initializeApp(config);
  DB = FirebaseApp.database();
  messageRef = DB.ref('messages').limitToLast(100);
  messageRef.on('value', (snapshot) => {
    if (snapshot.val())
      Dispatch(UpdateMessages(Object.values(snapshot.val())));
  });
}

const config = {
  apiKey: "AIzaSyAsRUBBB4BxJY_2Wx7DnAUqS3zmkAO9QDA",
  authDomain: "electron-sp.firebaseapp.com",
  databaseURL: "https://electron-sp.firebaseio.com",
  storageBucket: "electron-sp.appspot.com",
  messagingSenderId: "392126763061"
};
