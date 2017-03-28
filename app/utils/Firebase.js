import { initializeApp, database } from 'firebase';

export let FirebaseApp;
export let DB;

export function initializeFirebase() {
  FirebaseApp = initializeApp(config);
  DB = FirebaseApp.database();
}

const config = {
  apiKey: "AIzaSyAsRUBBB4BxJY_2Wx7DnAUqS3zmkAO9QDA",
  authDomain: "electron-sp.firebaseapp.com",
  databaseURL: "https://electron-sp.firebaseio.com",
  storageBucket: "electron-sp.appspot.com",
  messagingSenderId: "392126763061"
};
